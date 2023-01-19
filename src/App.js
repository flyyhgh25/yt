import './App.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Header, { LeftSide } from './components/Header';
import {Link} from 'react-router-dom'
function App() {
  const tiktok={
    backgroundColor:'black'
  }
  const ig={
    backgroundImage:"linear-gradient(to bottom right,#940df4, #ef07c8, #fa5614, #fbb208)"
  }
  const yt ={
    backgroundColor:"#1c3c5b"
  }
  const twitter={
    backgroundColor:"rgb(16, 106, 241);"
  }
  return (
    <>
     
      <main>
        <LeftSide/>
        <div className='right-side'>
          <div className='content'>
            {/* <Content/> */}
            <div className='content-isi'>
                <div className='content-img' style={yt}>
                  <i class="fa-brands fa-youtube"></i>
                </div>
                <div className='deskripsi'>
                  <Link to={'/yt'}>
                    <h4>Youtube</h4>
                    <span>Media downloader and Youtube Converter MP3</span>
                  </Link>
                </div>
             
            </div>

            <div className='content-isi'>
              <div className='content-img' style={ig}>
                <i class="fa-brands fa-instagram"></i>
              </div>
              <div className='deskripsi'>
              <Link to={'/ig'}>
                <h4>Instagram</h4>
                <span>Instagram Downloader Videos and Stories</span>
              </Link>
              </div>
            </div>
            <div className='content-isi'>
              <div className='content-img' style={tiktok}>
                <i class="fa-brands fa-tiktok"></i>
              </div>
              <div className='deskripsi'>
                <h4>Tiktok</h4>
                <span>Tiktok Downloader</span>
              </div>
            </div>
            <div className='content-isi'>
              <div className='content-img' style={twitter}>
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div className='deskripsi'>
                <h4>Twitter</h4>
                <span>Twitter downloader</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
