import { Link, useLocation, useParams } from "react-router-dom";

const CourseNavigation = () => {
  const { cid } = useParams();
  const { pathname } = useLocation();
  
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  
  return (
    <div>
      {links.map(link => (
        <Link 
          key={link} 
          to={`/Kanbas/Courses/${cid}/${link}`} 
          className={`nav-link ${pathname.includes(link) ? "text-danger" : "text-dark"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
};

export default CourseNavigation;
