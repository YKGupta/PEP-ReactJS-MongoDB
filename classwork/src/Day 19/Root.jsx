import { Link, Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About Us</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                Main part
                <Outlet />
            </main>
            <footer>
                This is footer
            </footer>
        </div>
    )
}

export default Root;