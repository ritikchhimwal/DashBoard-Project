import React from 'react'
import './sidebar.css';

const SideBar = () => {
  return (
    <aside id='sidebar' className='sidebar'>
      <ul className='sidebar-nav' id='sidebar-nav'>
        <li className='nav-item'>
          <a className='nav-link' href='/'>
            <i className='bi bi-grid'></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Documents</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="components-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> 
                <span>Customers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Suppliers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> 
                <span>Logistic</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#forms-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-journal-text"></i>
            <span>Forms</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="forms-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> 
                <span>Application Form</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> 
                <span>Feedback Form</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#reports-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-file-earmark-text"></i>
            <span>Reports</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="reports-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> 
                <span>Monthly Report</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> 
                <span>Annual Report</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> 
                <span>Custom Report</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#settings-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-gear"></i>
            <span>Settings</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="settings-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> 
                <span>General Settings</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> 
                <span>Account Settings</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> 
                <span>Privacy Settings</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#help-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-life-preserver"></i>
            <span>Help</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="help-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> 
                <span>FAQs</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> 
                <span>Support</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> 
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </li>
        
      </ul>
    </aside>
  )
}

export default SideBar;
