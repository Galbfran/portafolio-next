import Link from "next/link"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
            <div className="container d-flex">
                <Link href="/" className="navbar-brand">Galbiati Franco</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <Link href="/blog" className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item">
                        <Link href="/githubPage" className="nav-link">Github</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar