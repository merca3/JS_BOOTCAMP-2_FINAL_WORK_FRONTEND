import Breadcrumbs from "../Components/Breadcrumbs";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { SRLWrapper } from "simple-react-lightbox";
import MovieImage from "../Components/MovieImage";
import Page404 from "./Page404";

function Movie() {
    const { movieID } = useParams()
    const [movies, setMovies] = useState({
        loading: true,
        items: [],
    });

    const loadMovies = async () => {
        try {
            const response = await axios.get('http://localhost:8070/movies');
            setMovies({
                loading: false,
                items: response.data
            });
        } catch (err) {
            alert(err);
            setMovies({
                loading: false,
                items: [],
            });
        }
    }
    useEffect(() => {
        loadMovies();
        // eslint-disable-next-line
    }, [])

    let movieNeeded = [];
    let imagesToDisplay = [];
    if (!movies.loading && movies.items.length !== 0) {
        const moviesFiltered = movies.items.filter((movie) => movie.nameID === movieID);
        if (moviesFiltered.length === 0) {
            return <Page404 />
        }
        movieNeeded = moviesFiltered[0];
        const images = movieNeeded.images;
        imagesToDisplay = images.map((image, index) => <MovieImage source={image} alt={index} key={index} />)
    }

    const BreadcrumbPaths = [
        { link: '/', title: 'Home' },
        { link: '/movies', title: 'Movies' },
        { title: movieNeeded.title },
    ]

    return (
        <div className="container text-light">
            <Breadcrumbs paths={BreadcrumbPaths} />
            <h2>{movieNeeded.title}</h2>
            <div className="row">
                <div className="col-12 col-md-6">
                    <SRLWrapper>
                        <div className="row mb-2">
                            {/* main image */}
                            <div className="col">
                                <img style={{ cursor: "pointer" }} className="img-fluid rounded" src={movieNeeded.mainImage} alt={movieNeeded.nameID} />
                            </div>
                        </div>
                        <div className="row row-cols-2 row-cols-lg-3 justify-content-center">
                            {imagesToDisplay}
                        </div>
                    </SRLWrapper>
                </div>
                <div className="col-12 col-md-6">
                    <p>{movieNeeded.description}</p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam quos delectus, eligendi cum unde qui magnam aliquid eos officia, error officiis commodi inventore veniam necessitatibus debitis rerum explicabo aperiam quas.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ea optio earum ullam quidem autem tenetur? Nostrum soluta rerum recusandae tempora, veniam sit velit asperiores, aut debitis itaque voluptas quisquam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cupiditate nesciunt accusantium illum tempora et officiis ea voluptatum, illo, quam quis quae facere eum possimus neque, eius earum cum recusandae.
                    </p>
                    <div>
                        <button className="btn btn-lg btn-info mt-5">Watch Online</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Movie;