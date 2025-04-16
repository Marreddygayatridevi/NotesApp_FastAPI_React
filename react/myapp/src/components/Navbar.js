import React from "react";
import notebookIcon from "../notebook.png";

const Navbar = ({ handleLogout }) => (
  <div className="d-flex justify-content-between align-items-center p-3 border-bottom shadow-sm bg-white">
    <div className="d-flex align-items-center">
      <img src={notebookIcon} alt="Notebook" width="50" className="me-3" />
      <h3 className="mb-0">My Notes</h3>
    </div>
    <button className="btn btn-outline-warning" onClick={handleLogout}>
      Logout
    </button>
  </div>
);

export default Navbar;
