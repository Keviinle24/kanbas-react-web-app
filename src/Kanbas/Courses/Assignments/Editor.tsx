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
        {/* Complete on your own */}

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Assignment Group</label>
          </td>
          <td>
          <select id="wd-select-one-genre">
        
           <option value="FANTASY">ASSIGNMENTS</option>
        </select>
        
          </td>

        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
          <select id="wd-select-one-genre">
        
           <option value="FANTASY">Percentage</option>
        </select>
        
          </td>
          
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
          <select id="wd-select-one-genre">
        
           <option>Online</option>
        </select>
        
          </td>
          
        </tr>

      
        <label>Online Entry Options</label><br/>
        
        <input type="checkbox" name="check-genre" id="wd-text-entry"/>
        <label htmlFor="wd-chkbox-text-entry">Text Entry</label><br/>
        
        <input type="checkbox" name="check-genre" id="wd-website-url"/>
        <label htmlFor="wd-chkbox-web">Website URL</label><br/>
        
        <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
        <label htmlFor="wd-chkbox-mr">Media Recordings</label><br/>
        
        <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
        <label htmlFor="wd-chkbox-sa">Student Annotation</label><br/>

        <input type="checkbox" name="check-genre" id="wd-file-upload"/>
        <label htmlFor="wd-chkbox-file">File Uploads</label>


        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Assign Assign to</label><br/>
          </td>
          <td>
            <input id="wd-points" value={'Everyone'} />
          </td>
        </tr>

        <label htmlFor="wd-due-date">
        Due: </label><br/>
        <input type="date"
              id="wd-text-fields-dob"
              value="2024-05-13"/><br/>

<label htmlFor="wd-available-from">
        Available from: </label><br/>
        <input type="date"
              id="wd-text-fields-dob"
              value="2024-05-06"/><br/>

                  <label htmlFor="wd-available-until">
        Until: </label><br/>
        <input type="date"
              id="wd-text-fields-dob"
              value="2024-05-20"/><br/> 

            
      </table>
    <hr/>
    <button id="wd-cancel"
          
          type="button">
     Cancel
    </button>&nbsp;
    <button id="wd-save"
          
              type="button">
         Save
        </button> 
    </div>
);}
