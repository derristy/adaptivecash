import Header from '../partials/Header.jsx'
import Toolbar from '../partials/Toolbar.jsx'
import Sidebar from '../partials/Sidebar.jsx'
import Footer from '../partials/Footer.jsx'
import '../css/portal.css'

function Portal({ children }) {
    return (
        <div className="portal">
            <Header />
            <Toolbar />
            <Sidebar />
            <main className="portal__content">{children}</main>
            <Footer />
        </div>
    )
}

export default Portal