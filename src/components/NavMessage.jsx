import React from "react";

const NavMessage = () => {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-chat-dots"></i>
        <span className="badge bg-primary badge-number">3</span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          You have 3 new messages
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="message-item">
          <i className="bi bi-person-circle text-info"></i>
          <div>
            <h4>John Doe</h4>
            <p>Hey, are we still on for the meeting?</p>
            <p>10 min. ago</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="message-item">
          <i className="bi bi-person-circle text-info"></i>
          <div>
            <h4>Jane Smith</h4>
            <p>Don't forget to check the report.</p>
            <p>30 min. ago</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="message-item">
          <i className="bi bi-person-circle text-info"></i>
          <div>
            <h4>Alex Johnson</h4>
            <p>Could you send me the latest files?</p>
            <p>1 hr. ago</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="dropdown-footer">
          <a href="#">Show all messages</a>
        </li>
      </ul>
    </li>
  );
};

export default NavMessage;
