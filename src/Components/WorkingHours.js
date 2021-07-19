import Logo from "../Assets/Images/logo.png"

function WorkingHours() {

    return (
        <div className="row text-center text-light">
            <div className="col-4">
                <img src={Logo} alt="" />
            </div>
            <div className="col-8">
                <div className="my-2 fw-bold">Monday 9:00 - 22:00</div>
                <div className="my-2 fw-bold">Tuesday 9:00 - 22:00</div>
                <div className="my-2 fw-bold">Wednesday 9:00 - 22:00</div>
                <div className="my-2 fw-bold">Thursday 9:00 - 22:00</div>
                <div className="my-2 fw-bold">Friday 9:00 - 00:00</div>
                <div className="my-2 fw-bold">Saturday 10:00 - 00:00</div>
                <div className="my-2 fw-bold">Sunday 10:00 - 00:00</div>
            </div>
        </div>
    )
}

export default WorkingHours;