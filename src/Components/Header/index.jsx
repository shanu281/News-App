import React from "react"
import "./style.css"

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <section className="header flex">
                    <div className="logo">
                        <h1>Zigmo</h1>
                    </div>
                    <nav className="flex">
                        <h2>Home</h2>
                        <h2>About</h2>
                        <h2>Contact</h2>
                        <h2>Gallery</h2>
                        <h2>Article</h2>
                        <h2>Management</h2>
                    </nav>
                    
                    <div className='socialMedia flex'>
                            <a href="#"><i className="fa-brands fa-facebook" ></i></a>
                            <a href="#"><i className="fa-brands fa-twitter "></i></a>
                            <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
                        </div>
                    
                </section>
            </>
        )
    }
}

export default Header;
