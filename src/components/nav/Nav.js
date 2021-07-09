import './nav.css';
import logo from './imagenes/logo.png';
import ModalRegis from '../modalregistro/Modalregistro';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link  
} from "react-router-dom";

function Nav(){
return(
<div>
	<nav className="navbar fixed-top navbar-expand-lg navbar-dark align-bottom">
	  <div className="container-fluid">
	        <a className="navbar-brand d-lg-none"><img src={logo} /></a>
	        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	          <span className="navbar-toggler-icon"></span>
	        </button>

	        <div className="collapse navbar-collapse" id="navbarSupportedContent">
	          <ul  className="visitado navbar-nav mb-2 mb-lg-0 mx-auto">
	            <li className="nav-item">
	              <NavLink to="/conocenos" activeclassname="active" className="nav-link" aria-current="page" target="_self" >Conócenos</NavLink>
	            </li>
	             <li className="nav-item">
	              <NavLink to="/catalogo" activeclassname="active" className="nav-link" target="_self">Catálogo</NavLink>
	            </li>
	          
	            <li className="nav-item">
	              <a href="#" className="nav-link"  target="_self">Tu Pedido</a>
	            </li>
	            <NavLink to="/conocenos" className="navbar-brand d-none d-lg-block mx-auto"><img src={logo}/></NavLink>
	         
	            <li className="nav-item">
	              <a className="nav-link" target="_self">Contacto</a>
	            </li>
	            <li className="nav-item">
	              <a className="nav-link" type="button" data-bs-toggle="modal" data-bs-target="#ModalIngreso"><i className="fas fa-sign-in-alt"></i> Ingreso</a>
	            </li>
	            <li className="nav-item">
	              <a className="nav-link" type="button" data-bs-toggle="modal" data-bs-target="#ModalRegistro"><i className="fas fa-user-plus"></i> Registro</a>
	            </li>
	          </ul>
	        </div>
	  </div>
	</nav>

	<ModalRegis />
</div>

	);

}
export default Nav;
