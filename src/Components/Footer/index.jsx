import React from "react";
import "./style.css"

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <section className="footer">
                    <hr />
                    <div className="footer-content flex">

                        <div>
                            <ul className="ftr">
                                <li>Home</li>
                                <li>About us</li>
                                <li>Contact Us</li>
                                <li>Support</li>
                            </ul>
                            </div>
                            <div className="ftr">
                                <p>Call us (+91)12345-67890</p>
                                <p>Email: Test123@gail.com</p>
                            </div>
                            <div className="ftr">
                                Kailash Mansarovar,<br />
                                Hamalaya,<br />
                                781028 <br />
                                India
                            </div>
                        
                    </div>
                    <div className=' flex page-display'>
                        <p className="copyright">Copyright &copy; 2020 All right reserved </p>

                    </div>
                </section>
            </>
        )
    }
}
export default Footer;