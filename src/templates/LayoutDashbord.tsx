import {
    Link,
    Outlet
} from "react-router-dom"
import MyContext from "../contexts/myContext"
import { useContext } from 'react'

function Layout() {
    const {user}: any = useContext(MyContext)

    return (
        <div className="m-2">
            <h4>Welcome to Dashboard {user.name}!</h4>
            <nav className="m-2">
                <Link to="/">Home</Link>
            </nav>
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
