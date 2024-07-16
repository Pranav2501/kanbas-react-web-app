import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFileImport, FaFileExport, FaFilter, FaSearch, FaCog } from 'react-icons/fa';

export default function Grades() {
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-secondary me-2">
                    <FaFileImport className="me-2" /> Import
                </button>
                <div className="dropdown me-2">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaFileExport className="me-2" /> Export
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a className="dropdown-item" href="#">Action 1</a></li>
                        <li><a className="dropdown-item" href="#">Action 2</a></li>
                        <li><a className="dropdown-item" href="#">Action 3</a></li>
                    </ul>
                </div>
                <button className="btn btn-secondary">
                    <FaCog />
                </button>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="student-search" className="form-label">Student Names</label>
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /></span>
                        <input type="text" id="student-search" className="form-control" placeholder="Search Students" />
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="assignment-search" className="form-label">Assignment Names</label>
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /></span>
                        <input type="text" id="assignment-search" className="form-control" placeholder="Search Assignments" />
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-start mb-3">
                <button className="btn btn-secondary">
                    <FaFilter className="me-2" /> Apply Filters
                </button>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>A1 SETUP<br />Out of 100</th>
                            <th>A2 HTML<br />Out of 100</th>
                            <th>A3 CSS<br />Out of 100</th>
                            <th>A4 BOOTSTRAP<br />Out of 100</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-danger'>Jane Adams</td>
                            <td>100%</td>
                            <td>96.67%</td>
                            <td>92.18%</td>
                            <td>66.22%</td>
                        </tr>
                        <tr>
                            <td className='text-danger'>Christina Allen</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <td className='text-danger'>Sameen Ansari</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <td className='text-danger'>Han Bao</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>
                                <input type="text" className="form-control" defaultValue="88.03" />
                            </td>
                            <td>98.99%</td>
                        </tr>
                        <tr>
                            <td className='text-danger'>Mahi Sai Srinivas Bobbili</td>
                            <td>100%</td>
                            <td>96.67%</td>
                            <td>98.37%</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <td className='text-danger'>Siran Cao</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
