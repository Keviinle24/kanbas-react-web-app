export default function fieldtypes() {
    return (
        <div>
            <h4>Other HTML field types</h4>

<label htmlFor="wd-text-fields-salary-start">
Starting salary:</label>
<input type="number"
      id="wd-text-fields-salary-start"
      placeholder="1000"
      value="100000"/><br/>

<label htmlFor="wd-text-fields-rating">
Rating: </label>
<input type="range" id="wd-text-fields-rating"
      placeholder="Doe"
      max="5"
      value="4"/><br/>

        </div>
    )
}