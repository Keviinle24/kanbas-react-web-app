import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/download.png" width={200} />
            <div>
              <h5>
                 CS1234 React JS
                 </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button> 
            </div> <br/>
          </Link>
        </div>
        <div className="wd-dashboard-course">   <Link className="wd-dashboard-course-link"
                to="#">
            <img src="/nodejs_cover_photo_smaller_size.png" width={200} />
            <div>
              <h5>
                 CS1235 Node.js
                 </h5>
              <p className="wd-dashboard-course-title">
                Intro to Node.js
              </p>
              <button> Go </button>
            </div> <br/>
          </Link> </div>
        <div className="wd-dashboard-course">   <Link className="wd-dashboard-course-link"
                to="#">
            <img src="/sta-je-css.png" width={200} />
            <div>
              <h5>
                 CS1236 CSS
                 </h5>
              <p className="wd-dashboard-course-title">
                Intro to CSS
              </p>
              <button> Go </button>
            </div> <br/>
          </Link> </div>


          <div className="wd-dashboard-course">   <Link className="wd-dashboard-course-link"
                to="#">
            <img src="/tailwindpng.png" width={200} />
            <div>
              <h5>
                 CS1237 Tailwind
                 </h5>
              <p className="wd-dashboard-course-title">
                Intro to Tailwind
              </p>
              <button> Go </button>
            </div> <br/>
          </Link> </div>

          <div className="wd-dashboard-course">   <Link className="wd-dashboard-course-link"
                to="#">
            <img src="/html.png" width={200} />
            <div>
              <h5>
                 CS1238 HTML
                 </h5>
              <p className="wd-dashboard-course-title">
               Intro to HTML
              </p>
              <button> Go </button>
            </div> <br/>
          </Link> </div>

          <div className="wd-dashboard-course">   <Link className="wd-dashboard-course-link"
                to="#">
            <img src="/java-script.png" width={200} />
            <div>
              <h5>
                 CS1239 JavaScript
                 </h5>
              <p className="wd-dashboard-course-title">
               Intro to JavaScript
              </p>
              <button> Go </button>
            </div> <br/>
          </Link> </div>

          <div className="wd-dashboard-course">   <Link className="wd-dashboard-course-link"
                to="#">
            <img src="/bs.jpg" width={200} />
            <div>
              <h5>
                 CS1240 Bootstrap
                 </h5>
              <p className="wd-dashboard-course-title">
                Intro to Bootstrap
              </p>
              <button> Go </button>
            </div> <br/>
          </Link> </div>
      </div>

      
    </div>
  );
}
