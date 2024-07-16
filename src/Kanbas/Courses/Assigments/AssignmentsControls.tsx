import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export default function AssignmentsControls() {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <div className="row">
                <div className="col">
                    <div id="wd-search-assignment" className="input-group">
                        <span className="input-group-text"><FaSearch /></span>
                        <input id="wd-search-assignment-input" type="text" placeholder="Search..." className="form-control" />
                    </div>
                </div>
                <div className="col">
                    <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Assignment
                    </button>
                    <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Group
                    </button>
                </div>
            </div>
        </div>
    );
}
