import React from "react"

import logo from '../images/yakisoba.png'
import '../styles/Header.css'

function Header(){
    return(
        <div className="Header">
            <nav class="navbar fixed-top navbar menu">
                <div class="container-fluid title">
                    <img src={logo} alt="Logo" className="logo color1"></img>
                    <a class="navbar-brand color1 pos" href="">Sobre mim</a>
                    <a class="navbar-brand color1 pos" href="">Sabores</a>
                    <a class="navbar-brand color1 pos" href="">Preços</a>
                    <a class="navbar-brand color1 pos" href="">Encomende seu Yakisoba</a>
                </div>
            </nav>
        </div>
    )
}

export default Header