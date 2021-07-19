import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Breadcrumbs from "../Components/Breadcrumbs"

function Movies() {
    const BreadcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Movies' },
    ]

    let movieElements = '';
    const loadMovies = async () => {
        try {
            const response = await axios.get('http://localhost:8070/movies');
            const movies = response.data;
            // console.log(movies);
            movieElements = movies.map((movie, index) => {
                return (
                    <div className="row mb-5 pb-3 border-bottom" key={index}>
                        <div className="col-12 col-md-3">
                            <NavLink to={'/movies/' + movie._id}>
                                <img className="img-fluid" src={movie.images[0]} alt={index} />
                            </NavLink>
                        </div>
                        <div className="col-12 col-md-9">
                            <h3>
                                <NavLink to={'/movies/' + movie._id}>{movie.title}</NavLink>
                            </h3>
                            <p className="text-muted">
                                {movie.description}
                            </p>
                        </div>
                    </div>
                )
            })
            console.log(movieElements);
        } catch (err) {
            alert(err);
        }
    }
    useEffect(() => {
        loadMovies();
    })


    return (
        <div className="container">
            <Breadcrumbs paths={BreadcrumbPaths} />
            {movieElements}
        </div>
    )
}

export default Movies;