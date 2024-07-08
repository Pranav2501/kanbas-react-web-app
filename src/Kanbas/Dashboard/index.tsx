export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.png" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/webdev.png" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5630/Home">
                    CS5630 Web Development
                </a>
                <p className="wd-dashboard-course-title">
                    Web Development Online Course
                </p>
                <a href="#/Kanbas/Courses/5630/Home"> Go </a>
                </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/database.png" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5200/Home">
                    CS5200 Databases
                </a>
                <p className="wd-dashboard-course-title">
                    Database Management Systems
                </p>
                <a href="#/Kanbas/Courses/5200/Home"> Go </a>
                </div>
             </div>
         <div className="wd-dashboard-course">
            <img src="/images/dataviz.png" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/7295/Home">
                    CS7295 Info Viz
                </a>
                <p className="wd-dashboard-course-title">
                    Information Visualization Theory & Application
                </p>
                <a href="#/Kanbas/Courses/7295/Home"> Go </a>
                </div>
             </div>

         <div className="wd-dashboard-course">
            <img src="/images/algorithm.png" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5100/Home">
                    CS5100 Algorithms
                </a>
                <p className="wd-dashboard-course-title">
                    Data Structures and Algorithms 
                </p>
                <a href="#/Kanbas/Courses/5100/Home"> Go </a>
                </div>
             </div>
         <div className="wd-dashboard-course">
            <img src="/images/machinelearning.png" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5660/Home">
                    CS5660 Machine Learning
                </a>
                <p className="wd-dashboard-course-title">
                    Machine Learning
                </p>
                <a href="#/Kanbas/Courses/5660/Home"> Go </a>
                </div>
             </div>
         <div className="wd-dashboard-course">
            <img src="/images/computervision.png" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5330/Home">
                    CS5330 Computer Vision
                </a>
                <p className="wd-dashboard-course-title">
                    Computer Vision and Image Processing
                </p>
                <a href="#/Kanbas/Courses/5330/Home"> Go </a>
                </div>
             </div>
        <div className="wd-dashboard-course">
            <img src="/images/pdp.png" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5010/Home">
                    CS5330 PDP
                </a>
                <p className="wd-dashboard-course-title">
                    Programming Design Paradigms
                </p>
                <a href="#/Kanbas/Courses/5010/Home"> Go </a>
                </div>
             </div>
        </div>
      </div>
  );}
  