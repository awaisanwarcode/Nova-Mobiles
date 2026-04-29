import "./footer.css";
export const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-top-div">
                    <div className="footer-first-div">
                        <h2>NovaMobiles.</h2>
                        <p>At NovaMobiles, we are committed to bringing you the most advanced mobile technology from the world's leading brands, including Samsung, Apple, Vivo, Oppo, and more. Our mission is to provide an unparalleled shopping experience, offering the perfect balance of style, performance, and affordability. Whether you are looking for the latest flagship smartphone, a budget-friendly powerhouse, or premium accessories, we deal in a wide variety of mobile solutions tailored to your unique needs.</p>
                    </div>
                    <div className="footer-sec-div">
                        <h3>Famous Products</h3>
                        <div>
                            <a href="#Vivo">Vivo</a>
                            <a href="#Oppo">Oppo</a>
                            <a href="#Iphone">Iphone</a>
                        </div>
                    </div>
                    <div id="Contact" className="footer-third-div">
                        <h3>Contacts</h3>
                        <div>
                            <span>+92-300-1234567</span>
                            <span>example@gmail.com</span>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="footer-last-div">
                    <p>2006-2025 <sup>&#169;</sup></p>
                    <p>All right reserved</p>
                    <p>Made by <em>Awais Anwar S/O Muhammad Ayub</em> with &hearts;</p>
                </div>
            </footer>
        </>
    )
}