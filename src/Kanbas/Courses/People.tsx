import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findUsersForCourse } from "./client";
import PeopleTable from "./People/Table";

export default function People() {
  const { cid } = useParams(); // Get course ID from URL params
  const [users, setUsers] = useState<any[]>([]); // State to store users
  

  useEffect(() => {
    const fetchUsers = async () => {
      if (!cid) return; // Ensure course ID exists
      try {
        const enrolledUsers = await findUsersForCourse(cid);
        setUsers(enrolledUsers); // Set fetched users to state
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
  
      }
    };
    fetchUsers();
  }, [cid]);


  return (
    <div>
      <h1>People Enrolled in Course</h1>
      <PeopleTable users={users} /> 
    </div>
  );
}
