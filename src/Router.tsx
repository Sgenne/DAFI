import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";

const browserRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <Navbar />
            </div>
        )
    }
]);

function Router() {
    return <RouterProvider router={browserRouter} />;
}

export default Router;
