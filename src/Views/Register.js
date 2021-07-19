import Breadcrumbs from "../Components/Breadcrumbs"
import RegisterForm from "../Components/RegisterForm"
import Logo from "../Assets/Images/logo.png"

function Register() {
    const BreadcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Register' },
    ]

    return (
        <div className="container">
            <Breadcrumbs paths={BreadcrumbPaths} />
            <h2 className="text-info mb-4">Register for the best of our offers!</h2>
            <div className="row">
                <div className="col">
                    <RegisterForm />
                </div>
                <div className="col text-center">
                    <img className="img-fluid" style={{width: '400px'}} src={Logo} alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default Register;