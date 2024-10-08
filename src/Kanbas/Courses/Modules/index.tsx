import ModulesControls from "./ModulesControls"
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
export default function Modules() {
    return (
      <div>
        {/* Implement Collapse All button, View Progress button, etc. */}

       
       
        <button id="wd-all-good"
         
              type="button">
         Collapse All
        </button>&nbsp;

        <button id="wd-all-good"
           
              type="button">
          View Progress
        </button>&nbsp;

          
        <select id="wd-select-one-genre">
      
           <option selected value="SCIFI">
               Publish All</option>
          
        </select>&nbsp;

        <button id="wd-all-good"
          
              type="button">
         + Module
        </button>&nbsp;
        <div>
  <ModulesControls /><br /><br /><br /><br />
  <ul id="wd-modules" className="list-group rounded-0">
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
    <BsGripVertical className="me-2 fs-3" />
      <div className="wd-title p-3 ps-2 bg-secondary"> Week 1  <ModuleControlButtons /></div> 

      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">  <BsGripVertical className="me-2 fs-3" />

          LEARNING OBJECTIVES  <LessonControlButtons /> </li>      
        <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />

          Introduction to the course          <LessonControlButtons /> </li> 
        <li className="wd-lesson list-group-item p-3 ps-1">
          Learn what is Web Development </li>
        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
      </ul>
    </li>
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">
          LEARNING OBJECTIVES </li>
        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
      </ul>
    </li>
  </ul> </div></div>

  );}
  