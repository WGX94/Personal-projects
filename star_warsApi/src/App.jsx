import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import './index.css'
import Home from './pages/home/Home';
import Planets from './pages/planets/Planets';
import Error from './pages/error/Error';
import Layout from './components/header/Header';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {

    const Layout = () => {
        return ( //Suspense balise
            <div id="container">
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            )
    };

    const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
        {
            path: "/",
            element: <Home></Home>,        
        },
        {
            path: "/planets",
            element: <Planets></Planets>,
        }
        ]
    }
        
    ])
    return <RouterProvider router={router}></RouterProvider>

}

export default App