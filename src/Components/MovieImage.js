function MovieImage({source, alt}) {

    return (
        <div className="col mb-2">
            <img style={{ cursor: "pointer" }} className="img-fluid rounded" src={source} alt={alt} />
        </div>
    )
}

export default MovieImage;