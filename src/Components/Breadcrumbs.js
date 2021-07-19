import { NavLink } from "react-router-dom";

function Breadcrumbs({ paths }) {

    const links = paths.map((path, index) => {
        if (path.link) {
            return <li className="breadcrumb-item nav-link" key={index}><NavLink to={path.link}>{path.title}</NavLink></li>
        }
        return <li className="breadcrumb-item nav-link active" key={index}>{path.title}</li>
    });

    return (
        <nav aria-label="breadcrumb ">
            <ol className="breadcrumb mt-1">
                {links}
            </ol>
        </nav>
    )
}

export default Breadcrumbs;