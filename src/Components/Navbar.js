import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  let prevNavPage = null;
  const selectMode = (e)=>{
    props.colorSelected(e.target.value);
  }
  const activePage = (e)=>{
    if(!prevNavPage){
      prevNavPage = document.getElementById("homePage");
    }
    prevNavPage.classList.remove("active");
    e.target.classList.add("active");
    prevNavPage = e.target;
  }

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" id='title' to="/">
            <img src={process.env.PUBLIC_URL + "/text_newicon.png"} width="25" height="25"  alt="" />
            <b>{props.title}</b></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navPages">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-bold active" id="homePage" aria-current="page" to={process.env.PUBLIC_URL +"/"} onClick={activePage}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to={process.env.PUBLIC_URL +"/about"} onClick={activePage}>{props.navOpt2}</Link>
              </li>
              
            </ul>
            
            <div className="form-check form-switch">
              <input className={`form-check-input bg-${props.mode} border border-primary`} onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <select onClick={selectMode} className={`form-select text-${(props.mode === "dark")?("light"):("dark")} bg-${props.mode}`} aria-label="Default select example">
                <option value="blue">Bluish Dark Mode</option>
                <option value="green">Greenish Dark Mode</option>
                <option value="red">Reddish Dark Mode</option>
              </select>
            </div>
          </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    navOpt2: PropTypes.string
}

Navbar.defaultProps = {
    title:"Title",
    navOpt2: "About"
}