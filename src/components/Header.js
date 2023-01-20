import react from 'react'
import image from '../public/images/reactjss.png'
import logo from '../public/images/downloader.png'
import {Img} from 'react-image'
import { Link } from 'react-router-dom'

function ShowBar(){
  const ls = document.getElementById('left-side')
  const main = document.getElementById("main");
  if(ls.style.display==='block'){
    ls.style.display='none'
    main.style.display='grid'
    main.style.gridTemplateColumns='100%'
  }else{
    ls.style.display='block'
    main.style.display='grid'
    main.style.gridTemplateColumns='10% 90%'
  }
  
}
function Header(){
    return(
        <header>
        <ul>
          <li>
            <button onClick={ShowBar}><i className="fa-solid fa-bars"></i></button>
          </li>
          <li>
            <Link to='/' className='ha'>
              <Img src={logo} alt='eunwo' className='img_profile'/> Downloader
            </Link>
          </li>
        </ul>
        <ul>
          <li><i class="fas fa-sun"></i></li>
          {/* <li> <i class="fas fa-moon"></i></li> */}
          <li> <i class="fa-solid fa-bell"></i></li>
          <li> <Img src={image} alt='eunwo' className='img_profile'/></li>
        </ul>
      </header>     
    )
}
function LeftSide(){
  return(
    <div className='left-side' id="left-side">
          <ul>
            <li><i class="fa-solid fa-house"></i><br/>Home </li>
            <li><i class="fa-solid fa-photo-film"></i><br/>Library</li>
            <li><i class="fa-solid fa-download"></i><br/>Downloaded</li>
          </ul>
    </div>
  )
}
export {Header,LeftSide}