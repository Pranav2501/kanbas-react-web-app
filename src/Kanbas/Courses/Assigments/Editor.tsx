export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assigment Groups</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGMENTS">ASSIGNMENTS</option>
                <option value="QUIZES">QUIZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECTS">PROJECTS</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="PERCENTAGE">PERCENTAGE</option>
                <option value="POINTS">POINTS</option>
                <option value="COMPLETE">COMPLETE</option>
                <option value="INCOMPLETE">INCOMPLETE</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td align="left" valign="top">
              <select id="wd-submission-type">
                <option value="ONLINE">ONLINE</option>                
                <option value="ON PAPER">ON PAPER</option>
                <option value="NO SUBMISSION">NO SUBMISSION</option>
                <option value="EXTERNAL TOOL">EXTERNALTOOL</option>
              </select>
            </td>
            <td align="left" valign="bottom">
                <p>Online Entry Options:</p>
                        <input type="checkbox" id="wd-text-entry"/>
                        <label htmlFor="wd-text-entry">Text Entry</label><br/>

                        <input type="checkbox" id="wd-website-url"/>
                        <label htmlFor="wd-website-url">Website URL</label><br/>

                        <input type="checkbox" id="wd-media-recordings"/>
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                        <input type="checkbox" id="wd-student-annotation"/>
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                    
                        <input type="checkbox" id="wd-file-upload"/>
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </td>

          </tr>
          
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-text-entry">Assign To</label>
            </td>
            <td>
              <input type="text" id="wd-text-entry" placeholder="Everyone" value="Everyone"/>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
                <input type="date" id="wd-due-date" placeholder="2024-06-05"/>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
                <input type="date" id="wd-available-from" placeholder="2024-06-05"/>
            </td>
            <td align="right" valign="top">
                <label htmlFor="wd-available-until">Available Until</label>
            </td>
            <td>
                <input type="date" id="wd-available-until" placeholder="2024-06-05"/>
            </td>
          </tr>
          <tr>
            <td>
                
                <button id="wd-cancel">Cancel</button>
                <button id="wd-save">Save</button>
            </td>
          </tr>
          
          
          {/* Complete on your own */}
        </table>
      </div>
  );}
  