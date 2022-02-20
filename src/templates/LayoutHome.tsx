import {
    Outlet
} from "react-router-dom"
import Menu from '../components/menu'
import Header from '../components/header'
import Footer from '../components/footer'

function Layout() {
    return (
        <div>
            <Header />
            <Menu />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
