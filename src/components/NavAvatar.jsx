import React from 'react';
import dp from '../images/IMG_35906.jpg';

const NavAvatar = () => {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
        <img
          src={dp}
          alt="User Avatar"
          className="rounded-circle"
        />
        <span className="fs-5 m-2">Ritik</span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>Ritik</h6>
          <span>Web Developer</span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a className="dropdown-item" href="#">
            <i className="bi bi-person"></i> Profile
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <i className="bi bi-gear"></i> Settings
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <i className="bi bi-box-arrow-right"></i> Logout
          </a>
        </li>
      </ul>
    </li>
  );
};

export default NavAvatar;
