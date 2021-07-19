import { NavLink } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs"

function Movies() {
    const BreadcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Movies' },
    ]

    return (
        <div className="container">
            <Breadcrumbs paths={BreadcrumbPaths} />
            <button>
                <NavLink to="/movies/:movieID">
                    GoTo
                </NavLink>
            </button>

        </div>
    )
}

export default Movies;