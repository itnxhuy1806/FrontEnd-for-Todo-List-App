import { Outlet } from "react-router-dom";
import MenuAppBar from '../components/AppBar';

export function Dashboard() {
    return (
        <div>
            <MenuAppBar />
            <Outlet />
        </div>
    );
}
