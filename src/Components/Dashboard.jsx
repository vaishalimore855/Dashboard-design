import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const addProject = () => {
    const newProject = {
      name: `New Project ${projects.length + 1}`,
      status: "Upcoming",
      
    };
    setProjects([...projects, newProject]);
  };
  const showCompletedProjects = () => {
    setFilter("Completed");
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    return project.status === filter;
  });

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="sidebar">
          <div className="logo-container">
            {/* <img src="your-logo-url.png" alt="Logo" className="logo" /> */}
            Collaborify
          </div>
          <ul className="menu-list">
            <li className="menu-item">
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </li>
            <li className="menu-item">
              <i className="fas fa-project-diagram"></i> Projects
            </li>
            <li className="menu-item">
              <i className="fas fa-tasks"></i> Tasks
            </li>
            <li className="menu-item">
              <i className="fas fa-users"></i> Team
            </li>
            <li className="menu-item">
              <i className="fas fa-chart-bar"></i> Analytics
            </li>
            <li className="menu-item">
              <i className="fas fa-calendar-alt"></i> Calendar
            </li>
          </ul>
        </div>
        <div className="content">
          <header>
            <nav class="navigation">
              <ul>
                <li>
                  <i class="fas fa-file"></i> &nbsp;
                  <a href="#">Projects</a>
                </li>
                <li class="date-container">
                  <i class="far fa-calendar-alt"></i>&nbsp;
                  <select id="yearDropdown">
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                  </select>
                </li>
              </ul>
            </nav>
            <div class="icons">
              <div className="msg">
                <i class="far fa-comment"></i>
                <div class="notification-badge">2</div>
              </div>
              <div className="notification">
                <i class="far fa-bell"></i>
                <div class="notification-badge">3</div>
              </div>

              <div class="dropdown">
                <select>
                  <option value="account1">metamask </option>
                  <option value="account2">Account 2</option>
                </select>
              </div>
            </div>
          </header>

          <div className="header2">
            <nav class="navigation2">
              <ul>
                <li>
                  <span>Projects /</span>Projects 2023
                </li>
              </ul>
            </nav>
            <div class="search-container">
              <input type="text" placeholder="Search..." />
              <i class="fas fa-search"></i>
            </div>
          </div>

          <div className="tab3">
            <div className="top-items">
              <h4>Intelligent Analysis Highlights</h4>
              <button>
                Reanalysis <i className="fas fa-sync-alt"></i>{" "}
              </button>
            </div>
            <div className="bottom-items">
              <div className="icon-container">
                <i className="far fa-thin  fa-clock"></i>&nbsp;
                <p>
                  Team Efficiency has increased by 15% compared to previous
                  month..
                </p>
              </div>
              <div className="icon-container">
                <i className="far fa-clock" />
                <p>
                  Project Alpha is at risk of a potantial dalay.Reccommend
                  reviewing task allocation.
                </p>
              </div>
            </div>
          </div>
          <div className="tab4">
            <div className="left">
              <button onClick={() => handleFilterChange("All")}>
                All Projects
              </button>
              <button onClick={() => showCompletedProjects("Completed")}>
                Completed
              </button>
              <button onClick={() => handleFilterChange("Ongoing")}>
                Ongoing
              </button>
              <button onClick={() => handleFilterChange("Upcoming")}>
                Upcoming
              </button>
            </div>
            <div className="right">
              <div>
                <select>
                  <option>Name</option>
                  <option>xyz</option>
                </select>
              </div>
              <button onClick={addProject}>
                Add Project <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div>
            {filter === "Completed" && (
              <div className="completed" >
                <h3>Completed Projects</h3>
                {projects
                  .filter((project) => project.status === "Completed")
                  .map((project, index) => (
                    <div key={index}>
                      <p>{project.name}</p>
                      <p>Status: {project.status}</p>
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div class="scroll-container">
            <div className="all-projects">
              {filteredProjects.map((project, index) => (
                <div className="all">
                  <div key={index}>
                    <h4>{project.name}</h4>
                    <p>Status: {project.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
