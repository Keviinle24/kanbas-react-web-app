import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className=" mt-5" id="wd-profile-screen">
      <h3 className=" mb-4" style={{marginLeft: 25}}>Profile</h3>
      <div className=" p-4">
        <div className="mb-3">
          <input
            defaultValue="alice"
            placeholder="Username"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            defaultValue="123"
            placeholder="Password"
            type="password"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            defaultValue="Alice"
            placeholder="First Name"
            id="wd-firstname"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            defaultValue="Wonderland"
            placeholder="Last Name"
            id="wd-lastname"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            defaultValue="2000-01-01"
            type="date"
            id="wd-dob"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            defaultValue="alice@wonderland"
            type="email"
            id="wd-email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <select defaultValue="FACULTY" id="wd-role" className="form-select">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
        <Link
          to="/Kanbas/Account/Signin"
          className="btn btn-danger w-100"
        >
          Sign out
        </Link>
      </div>
    </div>
  );
}
