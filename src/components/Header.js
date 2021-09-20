import React from 'react';
import { FaCircle, 
    FaPlayCircle, 
    FaFileAlt, 
    FaShieldAlt, 
    FaChartLine, 
    FaCode, 
    FaWaveSquare,
    FaEye,
    FaStar,
    FaCodeBranch,
} from 'react-icons/fa';


const Header = () => {
    return (
        <div className="header">
            <div className="header_title">
                <div className="header_title_name">
                    <p>facebook/create-react-app</p>
                </div>
                <div className="header_title_view">
                    <div className="header_title_view_div">
                        <div>
                            <FaEye />
                            <p>Watch</p>
                        </div>
                        <div>
                            <p>500</p>
                        </div>
                    </div>
                    <div className="header_title_view_div">
                        <div>
                            <FaStar />
                            <p>Star</p>
                        </div>
                        <p>500</p>
                    </div>
                    <div className="header_title_view_div">
                        <div>
                            <FaCodeBranch />
                            <p>Fork</p>
                        </div>
                        <p>500</p>
                    </div>
                </div>
            </div>
            <div className="header_option">
                <div><FaCode /><p>Code</p></div>
                <div className="btm_red"><FaCircle /> <p>Issues</p><p id="header_option_value">219</p></div>
                <div><FaWaveSquare /><p>Pull requests</p><p id="header_option_value">46</p></div>
                <div><FaPlayCircle /><p>Action</p></div>
                <div><FaFileAlt /><p>Projects</p><p id="header_option_value">1</p></div>
                <div><FaShieldAlt /><p>Security</p></div>
                <div><FaChartLine /><p>Insights</p></div>
            </div>
        </div>
    )
}

export default Header;
