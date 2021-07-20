import { NavLink } from "react-router-dom";

function Page404() {

    return (
        <div className="container text-center">
            <h1 className="text-light mt-5">Error 404: Page Not Found</h1>
            <button className="btn btn-info mt-5">
                <NavLink className="nav-link text-dark" exact to="/">Return to the Home Page</NavLink>
            </button>
        </div>
    )
}

export default Page404;