 import "../styles/navbar.css"
const Navbar = () =>{
    return (
        <nav className="navbar">
                <h3 className="brand-name"><span className="brand-main">  Vaani </span> Portfolio</h3>
                <div className="navigate">
                    <span className="span-navi active">Home</span>
                    <span className="span-navi">Contact</span>
                    <span className="span-navi">Services</span>
                    <span className="span-navi">About</span>
                </div>
            </nav>
    )
}

export { Navbar };