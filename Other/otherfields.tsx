export default function otherfields() {
    return (
        <div><label htmlFor="wd-text-fields-email">
        Email: </label>
        <input type="email"
              placeholder="jdoe@somewhere.com"
              id="wd-text-fields-email"/><br/>
        
        <label htmlFor="wd-text-fields-dob">
        Date of birth: </label>
        <input type="date"
              id="wd-text-fields-dob"
              value="2000-01-21"/><br/></div>
    )
}