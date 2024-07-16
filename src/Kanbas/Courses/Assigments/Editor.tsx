import 'bootstrap/dist/css/bootstrap.min.css';
import './AssignmentEditor.css';  

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-5">
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input id="wd-name" className="form-control" value="A1 - ENV + HTML" />
            </div>
            <div className="mb-3">
                <textarea id="wd-description" className="form-control" rows={10}>
                    The assignment is available online. Submit a link to the landing page of...
                </textarea>
            </div>
            <div className="mb-3 row">
                <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
                <div className="col-sm-10">
                    <input type="number" id="wd-points" className="form-control" value={100} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="wd-group" className="col-sm-2 col-form-label">Group</label>
                <div className="col-sm-10">
                    <select id="wd-group" className="form-select" aria-label="Default select example">
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="QUIZZES">QUIZZES</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="PROJECTS">PROJECTS</option>
                    </select>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">Display grade as</label>
                <div className="col-sm-10">
                    <select id="wd-display-grade-as" className="form-select">
                        <option value="PERCENTAGE">PERCENTAGE</option>
                        <option value="POINTS">POINTS</option>
                        <option value="COMPLETE">COMPLETE</option>
                        <option value="INCOMPLETE">INCOMPLETE</option>
                    </select>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Submission Type</label>
                <div className="col-sm-10">
                    <div className="card">
                        <div className="card-body">
                            <div className="mb-3">
                                <select id="wd-submission-type" className="form-select">
                                    <option value="ONLINE">ONLINE</option>
                                    <option value="ON PAPER">ON PAPER</option>
                                    <option value="NO SUBMISSION">NO SUBMISSION</option>
                                    <option value="EXTERNAL TOOL">EXTERNAL TOOL</option>
                                </select>
                            </div>
                            <div>
                                <label className="form-label">Online Entry Options:</label>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-text-entry" className="form-check-input"/>
                                    <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-website-url" className="form-check-input"/>
                                    <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-media-recordings" className="form-check-input"/>
                                    <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-student-annotation" className="form-check-input"/>
                                    <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-file-upload" className="form-check-input"/>
                                    <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">Assign To</label>
                <div className="col-sm-10">
                    <div className="card">
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
                                <input type="text" id="wd-assign-to" className="form-control" placeholder="Everyone" value="Everyone"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="wd-due-date" className="form-label">Due Date</label>
                                <input type="date" id="wd-due-date" className="form-control" placeholder="2024-06-05"/>
                            </div>
                            <div className="mb-3 row">
                                <div className="col-md-6">
                                    <label htmlFor="wd-available-from" className="form-label">Available From</label>
                                    <input type="date" id="wd-available-from" className="form-control" placeholder="2024-06-05"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="wd-available-until" className="form-label">Available Until</label>
                                    <input type="date" id="wd-available-until" className="form-control" placeholder="2024-06-05"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-end">
                <button id="wd-cancel" className="btn btn-secondary me-2">Cancel</button>
                <button id="wd-save" className="btn btn-primary btn-danger">Save</button>
            </div>
        </div>
    );
}
