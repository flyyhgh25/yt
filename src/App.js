import './App.css';
import image from './public/images/reactjss.png'
import image1 from './public/images/alexander-shatov-JlO3-oY5ZlQ-unsplash.jpg'
import {Img} from 'react-image'
import '@fortawesome/fontawesome-free/js/all.js';
import Header from './components/Header';
import Content from './Content';
function App() {
  return (
    <>
      <Header/>
      <main>
        <div className='left-side'>
          <ul>
            <li><i class="fa-solid fa-house"></i><br/>Home </li>
            <li><i class="fa-solid fa-photo-film"></i><br/>Library</li>
            <li><i class="fa-solid fa-download"></i><br/>Downloaded</li>
          </ul>
        </div>
        <div className='right-side'>
          <div className='content'>
            <Content/>
           
            <div className='content-isi'>
            <figure>
              <Img src={image1} alt="Trulli" />
              <figcaption>
              <span>
              <Img src={image1} alt="Trulli" />
              </span>
              <span>
              <h4>ReactJS Tutorial - 21 - Basics of Form Handling</h4>
              Fig.1 - Trulli, Puglia, Italy.</span></figcaption>               
            </figure> 
            </div>
            <div className='content-isi'>
            <figure>
              <Img src={image1} alt="Trulli" />
              <figcaption>
              <Img src={image1} alt="Trulli" />Fig.1 - Trulli, Puglia, Italy.</figcaption>               
            </figure> 
            </div>
          </div>
        </div>
      </main>
    </>
  

  );
}

export default App;
