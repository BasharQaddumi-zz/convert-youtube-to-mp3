import React from 'react'
import { SocialIcon } from 'react-social-icons';
import './footer.css';
const footer = (props) =>
    (
        <div className="footer">
            <small style={{ color: '#E8E3E3' }}>Bashar Qaddumi - 2018 &copy;</small>
            <div>
                <SocialIcon className="socialIcon" url="https://www.facebook.com/BasharQdoumi" />
                <SocialIcon className="socialIcon" url="https://www.linkedin.com/in/bashar-qaddumi/" />
                <SocialIcon className="socialIcon" url="https://github.com/BasharQaddumi" />
                <SocialIcon className="socialIcon" url="https://www.instagram.com/basharqaddoumi/" />

            </div>
        </div>
    )

export default footer;

