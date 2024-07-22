import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assigments";
import AssignmentEditor from "./Assigments/Editor";
import Grades from "./Grades";
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../Database";


export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses" style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 className="text-danger">
        <FaAlignJustify className="me-3 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '1rem' }}>
          <CoursesNavigation />
        </div>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:id" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} /> 


          </Routes>
        </div>
      </div>
    </div>
  );}
