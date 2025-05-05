import "./TopNav.css";

const TopNav = ({ role, patient }) => {
  return (
    <header className="nav_bar">
      <div className="navbar-left">
        <h1>{role} Dashboard</h1>
      </div>
      <div className="navbar-right">
        <span>Welcome, {patient.name}!</span>
        <button className="logout-btn" onClick={patient.onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default TopNav;
