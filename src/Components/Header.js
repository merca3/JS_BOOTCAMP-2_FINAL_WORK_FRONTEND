import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../Assets/Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm, faComment, faUserPlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-muted">
                <div className="container-fluid">
                    <NavLink className="navbar-brand mx-3" to="/">
                        <img className="img-fluid w-25" src={Logo} alt="logo" />
                    </NavLink>
                    <button onClick={toggleMainMenu} className={menuTogglerBtnClasses} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={mainMenuClasses} id="navbarNavAltMarkup">
                        <div className="navbar-nav fw-bold ">
                            <NavLink className="nav-link text-center mx-3" exact to="/">
                                <div>
                                    <FontAwesomeIcon icon={faHome} />
                                </div>
                                Home
                            </NavLink>
                            <NavLink className="nav-link text-center mx-3" to="/movies">
                                <div>
                                    <FontAwesomeIcon icon={faFilm} />
                                </div>
                                Movies
                            </NavLink>
                            <NavLink className="nav-link text-center mx-3" to="/chat">
                                <div>
                                    <FontAwesomeIcon icon={faComment} />
                                </div>
                                Chat
                            </NavLink>
                            <NavLink className="nav-link text-center mx-3" to="/register">
                                <div>
                                    <FontAwesomeIcon icon={faUserPlus} />
                                </div>
                                Register
                            </NavLink>
                            <NavLink className="nav-link text-center mx-3" to="/about-us">
                                <div>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                </div>
                                About Us
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;