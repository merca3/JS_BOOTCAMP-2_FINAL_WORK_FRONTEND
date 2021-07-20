import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import Breadcrumbs from "../Components/Breadcrumbs"

function Movies() {
    const BreadcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Movies' },
    ]

    const [movies, setMovies] = useState([]);

    const loadMovies = async () => {
        try {
            const response = await axios.get('http://localhost:8070/movies');
            setMovies(response.data);
        } catch (err) {
            alert(err);
        }
    }
    useEffect(() => {
        loadMovies();
        // eslint-disable-next-line
    }, [])

    let pageAmount = 0;
    if (movies.length % 3 === 0) {
        pageAmount = movies.length % 3;
    } else {
        pageAmount = movies.length % 3 + 1;
    }
    
    const movieElements = movies.map(({ title, mainImage, description, nameID }, index) => {
        return (
            <div className="row mb-3 p-3 border text-info" key={index}>
                <div className="col-12 col-md-5 col-lg-3">
                    <NavLink to={'/movies/' + nameID}>
                        <img className="img-fluid rounded" src={mainImage} alt={index} />
                    </NavLink>
                </div>
                <div className="col-12 col-md-7 col-lg-9">
                    <h3>
                        <NavLink className="nav-link text-light px-0" to={'/movies/' + nameID}>{title}</NavLink>
                    </h3>
                    <p className="text-light">
                        {description}
                    </p>
                </div>
            </div>
        )
    })


    return (
        <div className="container">
            <Breadcrumbs paths={BreadcrumbPaths} />
            {movieElements}
            <div className="">
                <Pagination count={pageAmount} color="primary" variant="outlined" shape="rounded" />
            </div>
        </div>
    )
}

export default Movies;