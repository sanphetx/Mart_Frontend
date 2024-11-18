import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";

function Login() {
const [namelog, setName] = useState("");
const [passwordlog, setPasswordlog] = useState(" ");

const [flag, setFlag] = useState(false);

const [home, setHome] = useState(true);

function handleLogin(e) {
e.preventDefault();
let pass = localStorage.getItem("sanskarPassword").replace(/"/g, "");
let name = localStorage.getItem("sanskarName").replace(/"/g, "");
if (!name || !passwordlog) {
  setFlag(true);
  console.log("EMPTY");
} else if (passwordlog !== pass || name !== name) {
  setFlag(true);
} else {
  setHome(false);
  setFlag(false);
  window.location.href = "http://localhost:3000/"; // ใช้ window.location.href เปลี่ยน url ไปที่ http://localhost:3000/
}
}

return (
<div>
{home ? (
<form onSubmit={handleLogin}>
<h3>LogIn</h3>
<div className="form-group">
<label>Name</label>
<input
type="text"
className="form-control"
placeholder="Enter Full Name"
onChange={(event) => setName(event.target.value)}
/>
</div>
<div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(event) => setPasswordlog(event.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Login
      </button>
      <button type="submit" className="btn btn-dark btn-lg btn-block">
        <a id="nav a" href="/Registration">
          Register
        </a>
      </button>

      {flag && (
        <Alert color="primary" variant="warning">
          Fill correct Info else keep trying.
        </Alert>
      )}
    </form>
  ) : (
    <Home />
  )}
</div>
);
}

export default Login;