import React from 'react'



const NavBar = () => {
 
      
  return (
    
   <div className="container">
      <nav class="navbar navbar-expand-lg fixed-top" style={{backdropFilter:'blur(4px'}}>
    <div class="container ">
      <a class="navbar-brand text-light" href="/"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link text-info me-4 fs-5"  href="/">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-info me-4 fs-5" href="/">Experience</a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-info me-4 fs-5" href="/">Skills</a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-info me-5  fs-5" href="/">Projects</a>
          </li>

          <li className="nav-item mt-2">
          <a >
     
    </a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
   </div>
  )
}

export default NavBar