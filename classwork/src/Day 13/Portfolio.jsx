import './Portfolio.css';

const Portfolio = () => {
    return (
        <>
            <header>
                <div className="container">
                    <h1>Yash Kumar Gupta</h1>
                    <p>Full Stack Developer</p>
                </div>
            </header>
            <section className="about container">
                <h2>About Me</h2>
                <p>
                    Hello! I&apos;m Yash Kumar Gupta, a passionate Full Stack Developer skilled in
                    building web applications using modern technologies.
                </p>
            </section>
            <section className="skills container">
                <h2>Skills</h2>
                <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>React.js, Node.js, Express.js</li>
                    <li>MongoDB, MySQL, PHP</li>
                    <li>Socket.IO, REST APIs</li>
                </ul>
            </section>
            <section className="contact container">
                <h2>Contact</h2>
                <p>
                    Email: <a href="mailto:ykgupta2411@gmail.com">ykgupta2411@gmail.com</a>
                </p>
            </section>
            <footer>
                <p>© 2025 Yash Kumar Gupta. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Portfolio;