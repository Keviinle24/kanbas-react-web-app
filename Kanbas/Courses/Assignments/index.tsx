import { FaSearch, FaPlus, FaCheck } from "react-icons/fa";
import  GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container mt-4">
      <h2 className="mb-4">Assignments</h2>
      <div className="d-flex justify-content-between mb-3">
        <div className="input-group">
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search for Assignments"
          />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
            <FaPlus className="me-1" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>
      <h3 id="wd-assignments-title" className="mb-3">
        ASSIGNMENTS 40% of Total 
        <button className="btn btn-outline-secondary ms-2">
          <FaPlus />
        </button>
      </h3>
      <ul id="wd-assignment-list" className="list-group">
        <li className="wd-assignment-list-item list-group-item">
          <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
            A1 - ENV + HTML
          </a>
          <span className="text-muted">
            <br />Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100pts
          </span>
          <GreenCheckmark     />
        </li>
        <li className="wd-assignment-list-item list-group-item">
          <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/124">
            A2 - CSS + BOOTSTRAP
          </a>
          <span className="text-muted">
            <br />Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100pts
          </span>
          <GreenCheckmark  />
        </li>
        <li className="wd-assignment-list-item list-group-item">
          <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/125">
            A3 - JAVASCRIPT + REACT
          </a>
          <span className="text-muted">
            <br />Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100pts
          </span>
          <GreenCheckmark /> 
        </li>
      </ul>
    </div>
  );
}
