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

        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>

              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User</li>
                </ul>
              </li>

              <li className="wd-lesson">
                <span className="wd-title">Slides</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating an HTTP</li>
                  <li className="wd-content-item">Creating a Reaact Application</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>

                <span className="wd-title">Slides</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to HTML and the DOM</li>
                  <li className="wd-content-item">Formatting Web content with Headings and</li>
                  <li className="wd-content-item">Formatting content with Lists and Tables</li>
                </ul>
              </li>
            </ul>

            
          </li>

          
        </ul>
      </div>
  );}
  