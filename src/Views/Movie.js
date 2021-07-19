import Breadcrumbs from "../Components/Breadcrumbs"

function Movie() {
    const BreadcrumbPaths = [
        { link: '/', title: 'Home' },
        { link: '/movies', title: 'Movies' },
        { title: 'Movie' },
    ]

    return (
        <div className="container">
            <Breadcrumbs paths={BreadcrumbPaths} />

        </div>
    )
}

export default Movie;