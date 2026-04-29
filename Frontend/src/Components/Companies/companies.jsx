import "./companies.css";
export const CompaniesComp = () => {
    return (
        <>
            <div className="comapniesSec" id="Companies">
                <h2>Companies For You , We Serve</h2>
                <div className="companiesCont">
                    <a href="#Iphone" className="sngl-cmpni">
                        <img src="https://res.cloudinary.com/djnte3lgt/image/upload/v1777379067/iphone-logo-bg-brown_f9ed8s.png" alt="companyLogo" />
                    </a>
                    <a href="#Vivo" className="sngl-cmpni">
                        <img src="https://res.cloudinary.com/djnte3lgt/image/upload/v1777373321/vivo-logo-bg-brown_s0wggb.png" alt="companyLogo" />
                    </a>
                    <a href="#Samsung" className="sngl-cmpni samsung">
                        <img src="https://res.cloudinary.com/djnte3lgt/image/upload/v1777373175/samsung-logo_akfmrq.png" alt="companyLogo" />
                    </a>
                    <a href="#Oppo" className="sngl-cmpni">
                        <img src="https://res.cloudinary.com/djnte3lgt/image/upload/v1777373110/oppo-logo-bg-black_k2t7gl.png" alt="companyLogo" />
                    </a>
                    <a href="#Infinix" className="sngl-cmpni">
                        <img src="https://res.cloudinary.com/djnte3lgt/image/upload/v1777373014/Infinix-logo-bg-black_hiiyhz.png" alt="companyLogo" />
                    </a>
                </div>
            </div>
        </>
    )
}