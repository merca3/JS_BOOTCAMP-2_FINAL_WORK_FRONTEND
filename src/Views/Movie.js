import Breadcrumbs from "../Components/Breadcrumbs";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { SRLWrapper } from "simple-react-lightbox";

function Movie() {
    const { movieID } = useParams()
    const [movies, setMovies] = useState([]);
    const BreadcrumbPaths = [
        { link: '/', title: 'Home' },
        { link: '/movies', title: 'Movies' },
        { title: 'Movie' },
    ]

    const loadMovies = async () => {
        try {
            const response = await axios.get('http://localhost:8070/movies');
            setMovies(response.data);
            const movieNeeded = movies.filter((movie) => movie.nameID === movieID);
            console.log(movieNeeded)
        } catch (err) {
            alert(err);
        }
    }
    useEffect(() => {
        loadMovies();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container text-light">
            <Breadcrumbs paths={BreadcrumbPaths} />
            <h2>Black Widow</h2>
            <div className="row">
                <div className="col">
                    <SRLWrapper>
                        <div className="row mb-2">
                            <div className="col">
                                <img style={{cursor: "pointer"}} className="img-fluid rounded" src="http://localhost:3000/Assets/Images/blackwidow.jpg" alt="" />
                            </div>
                        </div>
                        <div className="row row-cols-2 row-cols-lg-3">
                            <div className="col mb-2">
                                <img style={{cursor: "pointer"}} className="img-fluid rounded" src="http://localhost:3000/Assets/Images/wonderwoman.jpg" alt="" />
                            </div>
                            <div className="col mb-2">
                                <img style={{cursor: "pointer"}} className="img-fluid rounded" src="http://localhost:3000/Assets/Images/croods2.jpg" alt="" />
                            </div>
                            <div className="col mb-2">
                                <img style={{cursor: "pointer"}} className="img-fluid rounded" src="http://localhost:3000/Assets/Images/cruella.jpeg" alt="" />
                            </div>
                            <div className="col mb-2">
                                <img style={{cursor: "pointer"}} className="img-fluid rounded" src="http://localhost:3000/Assets/Images/f9.jpg" alt="" />
                            </div>
                            <div className="col mb-2">
                                <img style={{cursor: "pointer"}} className="img-fluid rounded" src="http://localhost:3000/Assets/Images/spacejam.jpg" alt="" />
                            </div>
                            <div className="col mb-2">
                                <img style={{cursor: "pointer"}} className="img-fluid rounded" src="http://localhost:3000/Assets/Images/blackwidow.jpg" alt="" />
                            </div>
                        </div>
                    </SRLWrapper>
                </div>
                <div className="col">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam quos delectus, eligendi cum unde qui magnam aliquid eos officia, error officiis commodi inventore veniam necessitatibus debitis rerum explicabo aperiam quas.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ea optio earum ullam quidem autem tenetur? Nostrum soluta rerum recusandae tempora, veniam sit velit asperiores, aut debitis itaque voluptas quisquam.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cupiditate nesciunt accusantium illum tempora et officiis ea voluptatum, illo, quam quis quae facere eum possimus neque, eius earum cum recusandae.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo optio at id aperiam atque a blanditiis unde error hic sed soluta voluptate neque, fugiat sequi magni placeat eum adipisci voluptatibus.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi impedit ut neque facere dicta ipsum perspiciatis? Totam, labore error iure sequi nulla atque sint, iusto est possimus laudantium quo voluptatem.
                </div>
            </div>

        </div>
    )
}

export default Movie;