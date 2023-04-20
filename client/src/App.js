import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { Home } from "./components/home-page/Home";
import { Login } from "./components/login-page/Login";
import { Register } from "./components/register-page/Register";
import { Catalog } from "./components/catalog-page/Catalog";
import { Create } from "./components/create-page/Create";
import { Footer } from "./components/footer-page/Footer";
import AuthContextProvider from "./context/AuthContext";
import { Logout } from "./components/logout/Logout";
import MemeContextProvider from "./context/MemeContext";
import { Details } from "./components/details-page/Details";
import { Edit } from "./components/edit-page/Edit";
import RouteGards from "./util/RouteGards";
import { Profile } from "./components/profile-page/Profile";
import { NotFound } from "./components/not-found-page/NotFound";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";


function App() {
    return (
        <div className="App">
            <AuthContextProvider >
                <Navigation />

                <MemeContextProvider >
                    <ErrorBoundary >

                        <Routes >
                            <Route path="/" element={<Home />} ></Route>
                            <Route path="/login" element={<Login />} ></Route>
                            <Route path="/register" element={<Register />} ></Route>
                            <Route path="/catalog" element={<Catalog />} ></Route>
                            <Route path="/profile" element={<Profile />} ></Route>
                            <Route path="/create" element={<RouteGards > <Create />  </RouteGards>} ></Route>
                            <Route path="/logout" element={<Logout />} ></Route>
                            <Route path="/details/:id" element={<Details />} ></Route>
                            <Route path="/edit/:id" element={<RouteGards >  <Edit /> </RouteGards>} ></Route>
                            <Route path="/*" element={<NotFound />} ></Route>
                        </Routes>
                    </ErrorBoundary>
                </MemeContextProvider>

            </AuthContextProvider>
            <Footer />

        </div>
    );
}

export default App;
