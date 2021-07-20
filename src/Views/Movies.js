import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumbs from "../Components/Breadcrumbs"

function Movies() {
    const BreadcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Movies' },
    ]

    const [movies, setMovies] = useState([]);

    let movieElements = [];
    const loadMovies = async () => {
        try {
            const response = await axios.get('http://localhost:8070/movies');
            setMovies(response.data);
            movieElements = movies.map(({title, images, description, nameID}, index) => {
                return (
                    <div className="row mb-5 pb-3 border-bottom text-info" key={index}>
                        <div className="col-12 col-md-3">
                            <NavLink to={'/movies/' + nameID}>
                                <img className="img-fluid" src={images[0]} alt={index} />
                            </NavLink>
                        </div>
                        <div className="col-12 col-md-9">
                            <h3>
                                <NavLink to={'/movies/' + nameID}>{title}</NavLink>
                            </h3>
                            <p className="text-light">
                                {description}
                            </p>
                        </div>
                    </div>
                )
            })
        } catch (err) {
            alert(err);
        }
    }
    useEffect(() => {
        loadMovies();
        // eslint-disable-next-line
    }, [])


    return (
        <div className="container">
            <Breadcrumbs paths={BreadcrumbPaths} />
            {movieElements}
        </div>
    )
}

export default Movies;