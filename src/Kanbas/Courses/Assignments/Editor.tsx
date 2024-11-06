import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

const AssignmentForm = () => {
  const { courseId, assignmentId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const assignmentData = useSelector((state: any) => 
    state.assignmentsReducer.assignments.find((assignment: any) => assignment.course === courseId && assignment._id === assignmentId)
  );

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState('');
  const [availableFrom, setAvailableFrom] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [availableUntil, setAvailableUntil] = useState('');

  useEffect(() => {
    if (assignmentData) {
      setTitle(assignmentData.title || '');
      setDescription(assignmentData.description || '');
      setPoints(assignmentData.points || '');
      setAvailableFrom(assignmentData.available || '');
      setDueDate(assignmentData.due || '');
      setAvailableUntil(assignmentData.until || '');
    }
  }, [assignmentData]);

  const handleSaveAssignment = () => {
    const assignment = {
      ...assignmentData,
      course: courseId,
      title,
      description,
      points,
      available: availableFrom,
      due: dueDate,
      until: availableUntil,
    };

    if (assignmentData) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment(assignment));
    }

    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div id="assignment-editor">
      <h4><label htmlFor="assignment-title">Assignment Title</label></h4>
      <input 
        id="assignment-title" 
        className="form-control mb-3" 
        placeholder="Assignment Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />

      <div className="form-group mb-3">
        <label htmlFor="assignment-description" className="form-label">Assignment Description</label>
        <textarea 
          id="assignment-description" 
          className="form-control" 
          rows={6} 
          placeholder="Describe the assignment" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </div>

      <div className="container">
        {/* Points Section */}
        <div className="row mb-3">
          <label htmlFor="assignment-points" className="col-sm-3 col-form-label">Points</label>
          <div className="col-sm-9">
            <input 
              id="assignment-points" 
              className="form-control" 
              placeholder="Points" 
              value={points} 
              onChange={(e) => setPoints(e.target.value)} 
            />
          </div>
        </div>

        {/* Group Selector */}
        <div className="row mb-3">
          <label htmlFor="assignment-group" className="col-sm-3 col-form-label">Group</label>
          <div className="col-sm-9">
            <select id="assignment-group" className="form-select">
              <option value="ASSIGNMENTS">Assignments</option>
              <option value="GROUP1">Group 1</option>
              <option value="GROUP2">Group 2</option>
            </select>
          </div>
        </div>

        {/* Grade Display Options */}
        <div className="row mb-3">
          <label htmlFor="grade-display" className="col-sm-3 col-form-label">Grade Display</label>
          <div className="col-sm-9">
            <select id="grade-display" className="form-select">
              <option value="PERCENTAGE">Percentage</option>
              <option value="OPTION1">Option 1</option>
              <option value="OPTION2">Option 2</option>
            </select>
          </div>
        </div>

        {/* Submission Type and Options */}
        <div className="row mb-3">
          <label htmlFor="submission-type" className="col-sm-3 col-form-label">Submission Type</label>
          <div className="col-sm-9">
            <div className="border p-3">
              <select id="submission-type" className="form-select mb-3">
                <option value="ONLINE">Online</option>
                <option value="OPTION1">Option 1</option>
                <option value="OPTION2">Option 2</option>
              </select>

              <h6><b>Online Submission Options</b></h6>
              <div className="mb-2">
                <input type="checkbox" name="online-options" id="text-entry" />
                <label htmlFor="text-entry" className="ms-2">Text Entry</label>
              </div>
              <div className="mb-2">
                <input type="checkbox" name="online-options" id="url-entry" checked />
                <label htmlFor="url-entry" className="ms-2">Website URL</label>
              </div>
              <div className="mb-2">
                <input type="checkbox" name="online-options" id="media-recordings" />
                <label htmlFor="media-recordings" className="ms-2">Media Recordings</label>
              </div>
              <div className="mb-2">
                <input type="checkbox" name="online-options" id="student-annotations" />
                <label htmlFor="student-annotations" className="ms-2">Student Annotations</label>
              </div>
              <div className="mb-2">
                <input type="checkbox" name="online-options" id="file-upload" />
                <label htmlFor="file-upload" className="ms-2">File Uploads</label>
              </div>
            </div>
          </div>
        </div>

        {/* Due Date and Availability */}
        <div className="row mb-3">
          <label htmlFor="due-date" className="col-sm-3 col-form-label">Due Date</label>
          <div className="col-sm-9">
            <input 
              type="datetime-local" 
              id="due-date" 
              className="form-control" 
              value={dueDate} 
              onChange={(e) => setDueDate(e.target.value)} 
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 mb-3">
            <label htmlFor="available-from" className="col-form-label">Available From</label>
            <input 
              type="datetime-local" 
              id="available-from" 
              className="form-control" 
              value={availableFrom} 
              onChange={(e) => setAvailableFrom(e.target.value)} 
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="available-until" className="col-form-label">Available Until</label>
            <input 
              type="datetime-local" 
              id="available-until" 
              className="form-control" 
              value={availableUntil} 
              onChange={(e) => setAvailableUntil(e.target.value)} 
            />
          </div>
        </div>
      </div>

      <hr />
      <div className="text-end">
        <button 
          id="cancel-button" 
          className="btn btn-secondary me-2" 
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
        <button 
          id="save-button" 
          className="btn btn-danger" 
          onClick={handleSaveAssignment}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AssignmentForm;
