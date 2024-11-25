import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux";
import ProtectedContent from "./Account/ProtectedContent";
import { enrollCourse, unenrollCourse } from "./enrollmentreducer";

type EnrollmentStatus = { [key: string]: boolean };

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();  

  const [showEnrollments, setShowEnrollments] = useState(false);
  const [enrollmentStatus, setEnrollmentStatus] = useState<EnrollmentStatus>({});

  useEffect(() => {
    if (currentUser && currentUser._id) {
      const storedStatus = JSON.parse(
        localStorage.getItem(`enrollmentStatus-${currentUser._id}`) || "{}"
      );
      setEnrollmentStatus(storedStatus);
    }
  }, [currentUser]);

  const toggleEnrollments = () => {
    setShowEnrollments((prev) => !prev);
  };

  const handleEnroll = (courseId: string) => {
    dispatch(enrollCourse({ userId: currentUser._id, courseId }));
    setEnrollmentStatus((prev) => {
      const updatedStatus = { ...prev, [courseId]: true };
      localStorage.setItem(
        `enrollmentStatus-${currentUser._id}`,
        JSON.stringify(updatedStatus)
      );
      return updatedStatus;
    });
  };

  const handleUnenroll = (courseId: string) => {
    dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
    setEnrollmentStatus((prev) => {
      const updatedStatus = { ...prev, [courseId]: false };
      localStorage.setItem(
        `enrollmentStatus-${currentUser._id}`,
        JSON.stringify(updatedStatus)
      );
      return updatedStatus;
    });
  };

  const handleGo = (courseId: string) => {
    if (currentUser.role === "STUDENT") {
      if (enrollmentStatus[courseId]) {
        navigate(`/Kanbas/Courses/${courseId}/Home`);
      } else {
        alert("You must enroll in this course to access it.");
      }
    } else {
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    }
  };

  return (
    <div id="dashboard-container" className="container py-4">
      <div className="row justify-content-between align-items-center">
        <h1 className="col-auto mb-0">Dashboard</h1>

        {currentUser.role === "STUDENT" && (
          <button
            className="btn btn-outline-primary col-auto"
            onClick={toggleEnrollments}
          >
            {showEnrollments ? "View All Courses" : "View Enrolled Courses"}
          </button>
        )}
      </div>
      <hr />

      <ProtectedContent>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">New Course</h5>
          <div>
            <button
              className="btn btn-outline-success me-2"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-outline-warning"
              onClick={updateCourse}
            >
              Update
            </button>
          </div>
        </div>
        <input
          value={course.name}
          className="form-control my-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <textarea
          value={course.description}
          className="form-control"
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
        <hr />
      </ProtectedContent>

      <h2>Published Courses ({courses.length})</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course) => (
          <div key={course._id} className="col">
            <div className="card h-100">
              <img
                src={course.imageURL}
                className="card-img-top"
                alt={course.name}
              />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text" style={{ maxHeight: "100px", overflow: "hidden" }}>
                  {course.description}
                </p>

                <button
                  onClick={() => handleGo(course._id)}
                  className="btn btn-primary"
                >
                  Go
                </button>

                {currentUser.role === "STUDENT" && (
                  <>
                    {enrollmentStatus[course._id] ? (
                      <button
                        onClick={() => handleUnenroll(course._id)}
                        className="btn btn-danger float-end ms-2"
                      >
                        Unenroll
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEnroll(course._id)}
                        className="btn btn-success float-end ms-2"
                      >
                        Enroll
                      </button>
                    )}
                  </>
                )}

                <ProtectedContent>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                    className="btn btn-danger float-end ms-2"
                  >
                    Delete
                  </button>
                </ProtectedContent>

                <ProtectedContent>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                    className="btn btn-warning float-end"
                  >
                    Edit
                  </button>
                </ProtectedContent>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
