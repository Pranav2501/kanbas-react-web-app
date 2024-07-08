export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <h3 id="wd-assignments-title">
          EXAMS 20% of Total <button>+</button>
        </h3>
        <h3 id="wd-assignments-title">
          QUIZES 10% of Total <button>+</button>
        </h3>
        <h3 id="wd-assignments-title">
          PROJECT 30% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <p>Multiple Modules | <strong>Not available until </strong> May 6 at 12:00 AM | <strong>Due</strong> May 13 at 11:59 PM | 100 pts</p>
          </li>
          <li className="wd-assignment-list-item">
            {/* Complete On Your Own */}
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A2 - CSS + HTML
            </a>
            <p>Multiple Modules | <strong>Not available until </strong> May 13 at 12:00 AM | <strong>Due</strong> May 20 at 11:59 PM | 100 pts</p>

          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/1234">
              A3 - Javascript
            </a>
            <p>Multiple Modules | <strong>Not available until </strong> May 21 at 12:00 AM | <strong>Due</strong> May 25 at 11:59 PM | 100 pts</p>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/1234">
              A4 
            </a>
            <p>Multiple Modules | <strong>Not available until </strong> May 26 at 12:00 AM | <strong>Due</strong> May 29 at 11:59 PM | 100 pts</p>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/1234">
              A5
            </a>
            <p>Multiple Modules | <strong>Not available until </strong> June 1 at 12:00 AM | <strong>Due</strong> June 5 at 11:59 PM | 100 pts</p>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/1234">
              Q1
            </a>
            <p>Multiple Modules | <strong>Not available until </strong> May 12 at 12:00 AM | <strong>Due</strong> May 15 at 11:59 PM | 100 pts</p>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/1234">
              Q2
            </a>
            <p>Multiple Modules | <strong>Not available until </strong> May 16 at 12:00 AM | <strong>Due</strong> May 19 at 11:59 PM | 100 pts</p>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/1234">
              Q3
            </a>
            <p>Multiple Modules | <strong>Not available until </strong> May 20 at 12:00 AM | <strong>Due</strong> May 23 at 11:59 PM | 100 pts</p>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/1234">
              Exam - 1
            </a>
            <p>Multiple Modules | <strong>Not available until </strong> June 12 at 12:00 AM | <strong>Due</strong> June 15 at 11:59 PM | 100 pts</p>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/1234">
              Exam - 2
            </a>
            <p>Multiple Modules | <strong>Not available until </strong> July 12 at 12:00 AM | <strong>Due</strong> July 15 at 11:59 PM | 100 pts</p>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/1234">
              Project - P1
            </a>
            <p>Multiple Modules | <strong>Not available until </strong> July 15 at 12:00 AM | <strong>Due</strong> July 25 at 11:59 PM | 100 pts</p>
          </li>

        </ul>
      </div>
  );}
  