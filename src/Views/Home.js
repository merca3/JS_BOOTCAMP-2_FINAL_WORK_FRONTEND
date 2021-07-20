import { NavLink } from "react-router-dom";

import Pic1 from "../Assets/Images/blackwidow.jpg"
import Pic2 from "../Assets/Images/croods2.jpg"
import Pic3 from "../Assets/Images/cruella.jpeg"
import Pic4 from "../Assets/Images/f9.jpg"
import Pic5 from "../Assets/Images/soul.jpeg"
import Pic6 from "../Assets/Images/spacejam.jpg"
import Pic7 from "../Assets/Images/tomandjerry.jpg"
import Pic8 from "../Assets/Images/wonderwoman.jpg"

function Home() {

    return (
        <div className="container bg-dark">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <NavLink to="/movies/black-widow">
                            <img src={Pic1} className="d-block w-100" alt="black-widow" />
                        </NavLink>
                    </div>
                    <div className="carousel-item">
                        <NavLink to="/movies/croods2">
                            <img src={Pic2} className="d-block w-100" alt="croods2" />
                        </NavLink>
                    </div>
                    <div className="carousel-item">
                        <NavLink to="/movies/cruella">
                            <img src={Pic3} className="d-block w-100" alt="cruella" />
                        </NavLink>
                    </div>
                    <div className="carousel-item">
                        <NavLink to="/movies/f9">
                            <img src={Pic4} className="d-block w-100" alt="f9" />
                        </NavLink>
                    </div>
                    <div className="carousel-item">
                        <NavLink to="/movies/soul">
                            <img src={Pic5} className="d-block w-100" alt="soul" />
                        </NavLink>
                    </div>
                    <div className="carousel-item">
                        <NavLink to="/movies/space-jam">
                            <img src={Pic6} className="d-block w-100" alt="space-jam" />
                        </NavLink>
                    </div>
                    <div className="carousel-item">
                        <NavLink to="/movies/tom-and-jerry">
                            <img src={Pic7} className="d-block w-100" alt="tom-jerry" />
                        </NavLink>
                    </div>
                    <div className="carousel-item">
                        <NavLink to="/movies/wonder-woman-1984">
                            <img src={Pic8} className="d-block w-100" alt="wonder-woman-1984" />
                        </NavLink>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div>
                <h2 className="text-light my-5">Latest movies:</h2>
                <div className="row h-100 row-cols-1 row-cols-md-2 row-cols-xl-3 mb-2 text-center justify-content-center">
                    <div className="col card border border-info bg-dark text-light">
                        <NavLink to="/movies/black-widow">
                            <img className='img-fluid rounded mt-2' src={Pic1} alt="" />
                        </NavLink>
                        <div className="card-body">
                            <h4 className="card-title">Black Widow</h4>
                            <p className="card-text">Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.</p>
                            <NavLink to="/movies/black-widow" className="btn btn-info">Read More</NavLink>
                        </div>
                    </div>
                    <div className="col card border border-info bg-dark text-light">
                        <NavLink to="/movies/f9">
                            <img className='img-fluid rounded mt-2' src={Pic4} alt="" />
                        </NavLink>
                        <div className="card-body">
                            <h4 className="card-title">F9: The Fast Saga</h4>
                            <p className="card-text">Cipher enlists the help of Jakob, Dom's younger brother to take revenge on Dom and his team.</p>
                            <NavLink to="/movies/f9" className="btn btn-info">Read More</NavLink>
                        </div>
                    </div>
                    <div className="col card border border-info bg-dark text-light">
                        <NavLink to="/movies/croods2">
                            <img className='img-fluid rounded mt-2' src={Pic2} alt="" />
                        </NavLink>
                        <div className="card-body">
                            <h4 className="card-title">The Croods: A New Age</h4>
                            <p className="card-text">The prehistoric family the Croods are challenged by a rival family the Bettermans, who claim to be better and more evolved.</p>
                            <NavLink to="/movies/croods2" className="btn btn-info">Read More</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;