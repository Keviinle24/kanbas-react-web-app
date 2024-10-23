import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams } from "react-router";
import Module from "./Modules";
import Home from "./Home";
import AssignmentEditor from "./Assignments/Editor";
import Assignments from "./Assignments";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { courses } from "../Database";
 
 
export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      {course && course.name}</h2>
      <hr />
      <div className="d-flex">
      <div className="d-none d-md-block">
            <CoursesNavigation />
            </div>
    <div className="flex-fill">

            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Module/>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<PeopleTable />} />
              <Route path="People" element={<h2>People</h2>} />
            </Routes>
            </div></div>
    </div>
);}
