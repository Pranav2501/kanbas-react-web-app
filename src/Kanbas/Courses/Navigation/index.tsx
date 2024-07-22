import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = pathname.includes(link);
        return (
          <Link
            key={link}
            to={`/Kanbas/Courses/${cid}/${link}`}
            className={`list-group-item border border-0 ${isActive ? "active" : "text-danger bg-white"}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
