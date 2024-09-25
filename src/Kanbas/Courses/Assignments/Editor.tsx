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
            <label htmlFor="wd-points">Display Grade as</label>
          </td>
          <td>
          <select id="wd-select-one-genre">
        
           <option value="FANTASY">Percentage</option>
        </select>
        
          </td>
          
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Submission Type</label>
          </td>
          <td>
          <select id="wd-select-one-genre">
        
           <option value="FANTASY">Online</option>
        </select>
        
          </td>
          
        </tr>

      
        <label>Online Entry Options</label><br/>
        
        <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
        <label htmlFor="wd-chkbox-comedy">Text Entry</label><br/>
        
        <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
        <label htmlFor="wd-chkbox-drama">Website URL</label><br/>
        
        <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
        <label htmlFor="wd-chkbox-scifi">Media Recordings</label><br/>
        
        <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
        <label htmlFor="wd-chkbox-fantasy">Student Annotation</label>

        <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
        <label htmlFor="wd-chkbox-fantasy">File Uploads</label>


        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Assign Assign to</label><br/>
          </td>
          <td>
            <input id="wd-points" value={'Everyone'} />
          </td>
        </tr>
      </table>
    </div>
);}
