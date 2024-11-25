import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

import "./styles.css";

export interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
}

export default function Kanbas() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
    image: "",
  });
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchCourses = async () => {
    if (currentUser && currentUser._id) {
      try {
        const fetchedCourses = await userClient.findMyCourses();
        setCourses(fetchedCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const addNewCourse = async () => {
    try {
      const newCourse = await userClient.createCourse(course);
      setCourses([...courses, newCourse]);
    } catch (error) {
      console.error("Error creating new course:", error);
    }
  };

  const deleteCourse = async (courseId: string) => {
    try {
      const status = await courseClient.deleteCourse(courseId);
      if (status.success) {
        setCourses(courses.filter((course) => course._id !== courseId));
      } else {
        console.error("Failed to delete course:", status.message);
      }
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const updateCourse = async () => {
    try {
      const updatedCourse = await courseClient.updateCourse(course);
      setCourses(
        courses.map((c) => (c._id === updatedCourse._id ? updatedCourse : c))
      );
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={
            <ProtectedRoute>
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            </ProtectedRoute>
          } />
          <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}
