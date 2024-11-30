import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../UIComponents";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";




const Footer: React.FC = () => {

    return(
        <div className="w-full min-h-96 md:h-80 lg:h-80 px-5 md:px-20 bg-black py-10 flex justify-between items-center flex-wrap space-y-5 md:space-y-0 pt-28">
            <div>
                <Logo className="text-white m-auto md:m-0 text-center"/>
                <p className="text-white text-opacity-60 w-full text-center md:text-left md:w-96">We take awesome job offers to help creatives and technicals find their new future</p>

                <div className="w-full md:w-auto mt-3 flex items-center justify-center md:justify-start space-x-5">
                    <div className="w-6 h-6 bg-yellow-200 rounded-full text-sm flex items-center justify-center">
                        <FontAwesomeIcon icon={faFacebook} className=""/>
                    </div>
                    <div className="w-6 h-6 bg-purple-200 rounded-full text-sm flex items-center justify-center">
                        <FontAwesomeIcon icon={faTwitter} className=""/>
                    </div>
                    <div className="w-6 h-6 bg-indigo-300 rounded-full text-sm flex items-center justify-center">
                        <FontAwesomeIcon icon={faLinkedin} className=""/>
                    </div>
                    <div className="w-6 h-6 bg-cyan-200 rounded-full text-sm flex items-center justify-center">
                        <FontAwesomeIcon icon={faInstagram} className=""/>
                    </div>
                </div>
            </div>

            <ul className="w-full md:w-auto flex flex-wrap justify-center space-x-2 md:flex-col md:items-end md:space-y-2">
                <li className="text-white cursor-pointer text-opacity-75">Our Clients</li>
                <li className="border border-white h-5 m-auto border-opacity-35 md:hidden"/>
                <li className="text-white cursor-pointer text-opacity-75">For employers</li>
                <li className="border border-white h-5 m-auto border-opacity-35 md:hidden"/>
                <li className="text-white cursor-pointer text-opacity-75">Blog</li>
            </ul>
            <p className="w-full text-center mt-5 text-white text-opacity-45">&copy;2024 All rights reserved</p>
        </div>
    )
}

export default Footer;