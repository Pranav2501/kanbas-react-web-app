export default function Modules() {
    return (
      <div>
        {/* Collapse All button, View Progress button, etc. */}
        <button id="wd-collapse-all">Collapse All</button>
        <button id="wd-view-progress">View Progress</button>
        <select id="wd-publish-module">
            <option selected value="Publish All">Publish All</option>
            <option value="Unpublish">Unpublish</option>
            <option value="Publish">Publish</option>
        </select>
        <button id="wd-add-module">+ Module</button>
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
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating a HTTP Server with Node.js</li>
                  <li className="wd-content-item">Creating a React Application</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn CSS</li>
                  <li className="wd-content-item">Implement Styling with CSS</li>
                  <li className="wd-content-item">Implement BOX model</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 4</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 5</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to CSS</li>
                  <li className="wd-content-item">Styling with Colors</li>
                  <li className="wd-content-item">The Box Model</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  