import React from "react"

import '../styles/Footer.css'

function Footer(){
    return(
        <div className="Footer fixed-bottom">
            <p className="padding footer-p">Desenvolvido por</p>
            <a href="https://www.linkedin.com/in/noemi-cho-curriculo/" target="_blank" className="padding footer-a" >Noemi Cho</a>
        </div>
    )
}

export default Footer