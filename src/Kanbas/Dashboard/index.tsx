export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.png" width="100%" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="card-text">Full Stack software developer</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"
              >
                <img src="/images/webdev.png" width="100%" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5610 Web Dev
                  </h5>
                  <p className="card-text">Web Development</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"
              >
                <img src="/images/database.png" width="100%" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5200 Databases
                  </h5>
                  <p className="card-text">Database Management</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"
              >
                <img src="/images/dataviz.png" width="100%" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS7295 Info Viz
                  </h5>
                  <p className="card-text">Data Visualization</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"
              >
                <img src="/images/machinelearning.png" width="100%" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5660 Machine Learning
                  </h5>
                  <p className="card-text">ML Algorithms</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"
              >
                <img src="/images/computervision.png" width="100%" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5330 Computer Vision
                  </h5>
                  <p className="card-text">Image Analysis</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"
              >
                <img src="/images/pdp.png" width="100%" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5010 PDP
                  </h5>
                  <p className="card-text">Programming Paradigms</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
