import { useRoutes } from "react-router-dom"
import AddNewFood from "../pages/AddNewFood";
import AddNewSet from "../pages/AddNewSet";
import SeeSet from "../pages/SeeSet";
import ShowAllSet from "../pages/ShowAllSet";

export const MyRouter: React.FC = () => {
    const router = useRoutes([
        {
            path:'/',
            element:<ShowAllSet/>
        },
        {
            path:'add-food',
            element:<AddNewFood/>
        },
        {
            path:'add-set',
            element:<AddNewSet/>
        },
        {
            path:'see-set/:id',
            element:<SeeSet/>
        }
    ]) 
    return router;
}