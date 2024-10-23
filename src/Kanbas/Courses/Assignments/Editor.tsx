import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

export default function AssignmentEditor() {
  return (
    <div className="container mt-4" id="wd-assignments-editor">
    

      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" className="form-control" defaultValue="A1 - ENV + HTML" />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea id="wd-description" className="form-control" rows={4} defaultValue="The assignment is available online Submit a link to the landing page of"></textarea>
      </div>

      <table className="table">
        <tbody>
          <tr>
            <td className="text-end align-top">
              <label htmlFor="wd-points" className="form-label">Points</label>
            </td>
            <td>
              <input id="wd-points" className="form-control" defaultValue={100} />
            </td>
          </tr>

          <tr>
            <td className="text-end align-top">
              <label htmlFor="wd-assignment-group" className="form-label">Assignment Group</label>
            </td>
            <td>
              <select id="wd-assignment-group" className="form-select">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>

          <tr>
            <td className="text-end align-top">
              <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" className="form-select">
                <option value="Percentage">Percentage</option>
              </select>
            </td>
          </tr>

          <tr>
            <td className="text-end align-top">
              <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" className="form-select">
                <option>Online</option>
              </select>
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <label className="form-label">Online Entry Options</label><br />
              <div>
                <input type="checkbox" id="wd-text-entry" />
                <label htmlFor="wd-text-entry" className="ms-2">Text Entry</label><br />
              </div>
              <div>
                <input type="checkbox" id="wd-website-url" />
                <label htmlFor="wd-website-url" className="ms-2">Website URL</label><br />
              </div>
              <div>
                <input type="checkbox" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings" className="ms-2">Media Recordings</label><br />
              </div>
              <div>
                <input type="checkbox" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation" className="ms-2">Student Annotation</label><br />
              </div>
              <div>
                <input type="checkbox" id="wd-file-upload" />
                <label htmlFor="wd-file-upload" className="ms-2">File Uploads</label><br />
              </div>
            </td>
          </tr>

          <tr>
            <td className="text-end align-top">
              <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" className="form-control" defaultValue="Everyone" />
            </td>
          </tr>

          <tr>
            <td className="text-end align-top">
              <label htmlFor="wd-due-date" className="form-label">Due:</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" className="form-control" defaultValue="2024-05-13" />
            </td>
          </tr>

          <tr>
            <td className="text-end align-top">
              <label htmlFor="wd-available-from" className="form-label">Available from:</label>
            </td>
            <td>
              <input type="date" id="wd-available-from" className="form-control" defaultValue="2024-05-06" />
            </td>
          </tr>

          <tr>
            <td className="text-end align-top">
              <label htmlFor="wd-available-until" className="form-label">Until:</label>
            </td>
            <td>
              <input type="date" id="wd-available-until" className="form-control" defaultValue="2024-05-20" />
            </td>
          </tr>
        </tbody>
      </table>

      <hr />
      <div className="d-flex justify-content-end mt-4">
        <button id="wd-cancel" className="btn btn-secondary me-2" type="button">
          <FaTimes className="me-1" /> Cancel
        </button>
        <button id="wd-save" className="btn btn-danger" type="button">
          <FaCheck className="me-1" /> Save
        </button>
      </div>
    </div>
  );
}
