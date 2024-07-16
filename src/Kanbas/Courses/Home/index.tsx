import Modules from "../Modules";
import CourseStatus from "./Status";
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <Modules />
        </div>
        <div className="col-md-4">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}
