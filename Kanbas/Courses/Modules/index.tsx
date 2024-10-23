import { useParams } from "react-router";
import * as db from "../../Database";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons"; 
import LessonControlButtons from "./LessonControlButtons"; 

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules.filter(module => module.course === cid);

  return (
    <div>
     
      <div className="mb-3">
        <button id="wd-all-good" type="button">Collapse All</button>&nbsp;
        <button id="wd-all-good" type="button">View Progress</button>&nbsp;
        <select id="wd-select-one-genre">
          <option selected value="SCIFI">Publish All</option>
        </select>&nbsp;
        <button id="wd-all-good" type="button">+ Module</button>&nbsp;
      </div>

    
      <ModulesControls /><br /><br /><br /><br />

\
      <ul id="wd-modules" className="list-group rounded-0">
        {modules.length === 0 ? (
          <li className="list-group-item text-center">No modules available for this course.</li>
        ) : (
          modules.map(module => (
            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map(lesson => (
                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
