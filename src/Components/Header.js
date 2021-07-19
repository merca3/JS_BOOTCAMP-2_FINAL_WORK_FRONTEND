import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../Assets/Images/logo.png';

function Header() {

    const [mainMenuCollapsed, setMainMenuCollapsed] = useState(true);

    const toggleMainMenu = () => {
        setMainMenuCollapsed(!mainMenuCollapsed);
    }

    let mainMenuClasses = 'collapse navbar-collapse flex-row-reverse';
    if (!mainMenuCollapsed) {
        mainMenuClasses += ' show';
    }

    let menuTogglerBtnClasses = 'navbar-toggler';
    if (mainMenuCollapsed) {
        menuTogglerBtnClasses += ' collapsed';
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand mx-3" to="/">
                        <img className="img-fluid w-25" src={Logo} alt="logo"/>
                    </NavLink>
                    <button onClick={toggleMainMenu} className={menuTogglerBtnClasses} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={mainMenuClasses} id="navbarNavAltMarkup">
                        <div className="navbar-nav fw-bold">
                            <NavLink className="nav-link mx-3" exact to="/">Home</NavLink>
                            <NavLink className="nav-link mx-3" to="/movies">Movies</NavLink>
                            <NavLink className="nav-link mx-3" to="/chat">Chat</NavLink>
                            <NavLink className="nav-link mx-3" to="/register">Register</NavLink>
                            <NavLink className="nav-link mx-3" to="/about-us">About Us</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;