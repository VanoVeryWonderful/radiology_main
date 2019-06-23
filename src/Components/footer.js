import React from 'react'
import '../index.css'
import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faVk} from '@fortawesome/free-brands-svg-icons'
import { faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'

const Instargam = <FontAwesomeIcon icon={faInstagram} />
const Vk = <FontAwesomeIcon icon={faVk}/>
const Telegram = <FontAwesomeIcon icon={faTelegramPlane}/>
const Facebook = <FontAwesomeIcon icon={faFacebookF}/>
const Envelope = <FontAwesomeIcon icon={faEnvelope}/>
export default class Footer extends React.Component {
  // TODO hello
  render(){
    return(
      <footer>
      <nav>
        <div className="navtop_footer">
          <a href="#">Home</a>
          <a href="#">CT Normal Anatomy</a>
          <a href="#">Oncology Cases</a>
          <a href="#">Other</a>
          <a href="#">About</a>
        </div>
      </nav>
      <div className="navbar_">
        <a className = "logo_">
          <img alt="" src={logo} className ="logoimg_footer"  />
        </a>
      </div>
      <div className="footer_block">
        <a href="#" className="fab fa-instagram">{Instargam}</a>
        <a href="#" className="fab fa-vk">{Vk}</a>
        <a href="#" className="fab fa-telegram-plane">{Telegram}</a>
        <a href="#" className="fab fa-facebook-f">{Facebook}</a>
        <a href="#" className="far fa-envelope">{Envelope}</a>
      </div>
      <div className="footer_end">
        <p>
          &#169;VanoVeryWonderful, Inc. 2019
        </p>
      </div>
    </footer>
    )
  }
}
