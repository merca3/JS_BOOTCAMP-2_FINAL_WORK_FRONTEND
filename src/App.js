import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Views/Home";
import Movies from "./Views/Movies";
import Movie from "./Views/Movie";
import Chat from "./Views/Chat";
import Register from "./Views/Register";
import AboutUs from "./Views/AboutUs";
import Page404 from "./Views/Page404";

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/movies">
                        <Movies />
                    </Route>
                    <Route exact path="/movies/:movieID">
                        <Movie />
                    </Route>
                    <Route path="/chat">
                        <Chat />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/about-us">
                        <AboutUs />
                    </Route>
                    <Route>
                        <Page404 />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
