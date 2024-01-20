import React from 'react'

const HeaderComponent = () => {
    return (
        <div>
           <header className="fixed-top">
            <nav className="navbar navbar-expand-lg bg-black fixed-top fw-bold py-4">
                    <div className="container">
                        <a className="navbar-brand ms-3 text-danger" href="#"><h1>Black BUS.com</h1></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <ul className="nav nav-pills" id="navmenu">
                            <li className="nav-item px-4">
                              <a className="nav-link text-white fw-bold" href="#">Register</a>
                            </li> 
                          </ul>
                    </div>
                </nav>
            </header> 
        </div>
    )
}

export default HeaderComponent