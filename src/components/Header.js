import react from 'react'
import image from '../public/images/reactjss.png'
import {Img} from 'react-image'

function Header(){
    return(
        <header>
        <ul>
          <li><i className="fa-solid fa-bars"></i></li>
          <li><i className="fa-brands fa-youtube"></i> Downloader</li>
        </ul>
        <ul>
          <li> <i class="fa-solid fa-magnifying-glass"></i></li>
          <li> <i class="fa-solid fa-bell"></i></li>
          <li> <Img src={image} alt='eunwo' className='img_profile'/></li>
        </ul>
      </header>
    )
}

export default Header
