import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../UIComponents";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";




const Footer: React.FC = () => {

    return(
        <div className="w-full h-80 px-20 bg-black py-10 flex justify-between items-center">
            <div>
                <Logo className="text-white"/>
                <p className="text-white text-opacity-60 w-96">We take awesome job offers to help creatives and technicals find their new future</p>

                <div className="mt-3 flex items-center justify-start space-x-5">
                    <div className="w-6 h-6 bg-yellow-200 rounded-full text-sm flex items-center justify-center">
                        <FontAwesomeIcon icon={faFacebook} className=""/>
                    </div>
                    <div className="w-6 h-6 bg-purple-200 rounded-full text-sm flex items-center justify-center">
                        <FontAwesomeIcon icon={faTwitter} className=""/>
                    </div>
                    <div className="w-6 h-6 bg-blue-200 rounded-full text-sm flex items-center justify-center">
                        <FontAwesomeIcon icon={faLinkedin} className=""/>
                    </div>
                    <div className="w-6 h-6 bg-cyan-200 rounded-full text-sm flex items-center justify-center">
                        <FontAwesomeIcon icon={faInstagram} className=""/>
                    </div>
                </div>
            </div>

            <ul className="flex flex-col items-end space-y-1">
                <li className="text-white text-opacity-75">Our Clients</li>
                <li className="text-white text-opacity-75">For employers</li>
                <li className="text-white text-opacity-75">Blog</li>
                <li className="text-white text-opacity-40">&copy;2024 All rights reserved</li>
            </ul>
        </div>
    )
}

export default Footer;