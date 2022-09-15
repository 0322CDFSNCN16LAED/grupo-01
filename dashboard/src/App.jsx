import "./App.css";
import Dashboard from "./components/Dashboard";
import ProductsList from "./components/products/ProductList";
import Sidebar from "./components/Sidebar";

import { Route, Switch } from "react-router-dom";
import SearchMovies from "./components/products/SearchMovies";

function App() {
    return (
        <div id="wrapper">
            {/* <!-- Sidebar --> */}
            <Sidebar />
            {/* <!-- End of Sidebar --> */}

            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">
                {/* <!-- Main Content --> */}
                <div id="content">
                    {/* <!-- Content Row Top --> */}
                    <div className="container-fluid pt-5">
                        <Switch>
                            <Route
                                path="/"
                                component={Dashboard}
                                exact={true}
                            />
                            <Route path="/products" component={ProductsList} />
                            <Route path="/search" component={SearchMovies} />
                        </Switch>
                    </div>
                    {/* <!--End Content Row Top--> */}
                </div>
                {/* <!-- End of MainContent --> */}

                {/* <!-- Footer --> */}
                <footer className="sticky-footer bg-green">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>2022 Todos los derechos
    reservados</span>
                        </div>
                    </div>
                </footer>
                {/* <!-- End of Footer --> */}
            </div>
            {/* <!-- End of Content Wrapper --> */}
        </div>
    );
}

export default App;
