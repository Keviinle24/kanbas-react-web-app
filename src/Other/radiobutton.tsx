export default function radiobutton() {
    return (
        <div><h5 id="wd-radio-buttons">Radio buttons</h5>

        <label>Favorite movie genre:</label><br />
        
        <input type="radio" name="radio-genre" id="wd-radio-comedy"/>
        <label htmlFor="wd-radio-comedy">Comedy</label><br />
        
        <input type="radio" name="radio-genre" id="wd-radio-drama"/>
        <label htmlFor="wd-radio-drama">Drama</label><br />
        
        <input type="radio" name="radio-genre" id="wd-radio-scifi"/>
        <label htmlFor="wd-radio-scifi">Science Fiction</label><br />
        
        <input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
        <label htmlFor="wd-radio-fantasy">Fantasy</label></div>
    )
}