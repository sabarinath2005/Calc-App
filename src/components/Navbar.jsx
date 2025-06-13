import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      

      <nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Calc-App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Addition</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/sub">Subtraction</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/multi">Multiplication</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/div">Division</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/vote">Voting Eligibility</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar