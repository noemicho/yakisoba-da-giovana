import React from "react"

import logo from '../images/yakisoba.png'
import '../styles/Header.css'

import { Link } from "react-router-dom"

function Header(){
    return(
        <div className="Header">
            <nav class="navbar fixed-top navbar menu">
                <div class="container-fluid title">
                    <img src={logo} alt="Logo" className="logo color1"></img>
                    <Link to='/pagina-inicial'><a class="navbar-brand color1 pos" href="">Página Inicial</a></Link>
                    <Link to='/sabores'><a class="navbar-brand color1 pos" href="">Sabores</a></Link>
                    <Link to='/preços'><a class="navbar-brand color1 pos" href="">Preços</a></Link>
                    <Link to='/encomende'><a class="navbar-brand color1 pos" href="">Encomende seu Yakisoba</a></Link>
                </div>
            </nav>
        </div>
    )
}

export default Header