import React from 'react'
import logo from './gallery/logo.png'
import { Link } from 'react-router-dom'
const NavBar = () => {
    let linkStyle={
        textDecoration:'none',
        color:'black'
      }
  return (
    <div className=''>
        <div className='d-flex align-items-center justify-content-between bg-dark p-2 fixed-top'>
        <a class="navbar-brand ms-5 d-none d-lg-inline" href="#" style={{fontWeight:'bold',fontSize:'20px'}}><img src={logo} style={{width:'60px', borderRadius:'50%',marginRight:'5%'}} />
        <span class="waviy text-light">            
            <span>q</span>
            <span>q</span>
            <span>q</span>
            <span>q</span>
            <span>q</span>
            <span>q</span>
            <span>q</span>
            <span>q</span>
            <span>q</span>
            <span>q</span>
            <span className='me-2'>3</span>
        </span></a>

    <section className='d-none d-md-flex align-items-center justify-content-around pe-5 '>

    <button type="button" class="btn btn-outline-danger me-3"><Link to ='/'style={linkStyle} className='text-light'>Home</Link></button>
    <button type="button" class="btn btn-outline-danger me-3"><Link to ='/About us'style={linkStyle} className='text-light'>Today's Deal</Link></button>
    <button type="button" class="btn btn-outline-danger me-3"><Link to ='/Student'style={linkStyle} className='text-light'>Customer Service</Link></button>
    <button type="button" class="btn btn-outline-danger me-3"><Link to ='/Contact'style={linkStyle} className='text-light'>New Releases</Link></button>
    <button type="button" class="btn btn-outline-danger me-3"><Link to ='/Adminssion Information'style={linkStyle} className='text-light'>Gifts Idea</Link></button>

    </section>

    <nav class="navbar d-lg-none bg-body-tertiary fixed-top">
            
            <div class="container">
              
            {/* <a class="navbar-brand" href="#" style={{fontWeight:'bolder'}}><img src={logo} style={{width:'60px', borderRadius:'50%',marginRight:'5%'}} />CALVARY LOVE ACADEMY</a> */}

              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasNavbarLabel">CALVARY LOVE ACADEMY</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <button type="button" class="btn btn-outline-danger me-3 mt-3" style={{width:'100%'}}><Link to ='/'style={linkStyle} >Home</Link></button>
                    </li>
                    <li class="nav-item">
                    <button type="button" class="btn btn-outline-danger me-3 mt-3" style={{width:'100%'}}><Link to ='/About us'style={linkStyle} >Today's Deal</Link></button>
                    </li>
                    <li class="nav-item">
                    <button type="button" class="btn btn-outline-danger me-3 mt-3" style={{width:'100%'}}><Link to ='/Student'style={linkStyle} >Customer Service</Link></button>
                    </li>
                    <li class="nav-item">
                    <button type="button" class="btn btn-outline-danger me-3 mt-3" style={{width:'100%'}}><Link to ='/Contact'style={linkStyle} >New Releases</Link></button>
                    </li>
                    <li class="nav-item">
                    <button type="button" class="btn btn-outline-danger me-3 mt-3" style={{width:'100%'}}><Link to ='/Adminssion Information'style={linkStyle} >Gifts Idea</Link></button>
                    </li>
                    <li class="nav-item dropdown">
                      {/* <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a> */}
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li>
                          <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                  {/* <form class="d-flex mt-3" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                  </form> */}
                </div>
              </div>
            </div>
          </nav>



        </div>

    </div>
  )
}

export default NavBar