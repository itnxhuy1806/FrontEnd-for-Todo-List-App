import { Dashboard } from "../layouts/AppLayout"
import Home from "../pages/Home/Home"

function Test() {
    return <div>Test</div>
}

export const homePage = {
    path: "/",
    element: <Dashboard />,
    children: [{
        path: 'test',
        element: <Test />
    }]
}