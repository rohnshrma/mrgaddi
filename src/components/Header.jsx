import React from "react"

function Header(){
  return (

    <div id="header">
        <div class="main-box">
        <nav class="navbar navbar-expand-lg navbar-dark navigation-menu">
          <a class="navbar-brand rohn" href="#">MrGaddi</a>
          <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Process</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

        <div class="siteInfo">
              <h1>Welcome to MrGaddi</h1>
              <p>One of the best car cleaning services</p>
        </div>

      </div>

  )
}


export default Header;
