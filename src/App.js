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
 
  return (
    <>     
      <main id='main'>
        <LeftSide/>
        <div className='right-side'>
          <section className='intro'>
              <h1>Go Downloader</h1>
              <p>
                GoConverter yaitu tempat download video, audio, maupun foto 
                dari berbagai sosial media seperti Youtube, Instagram, dan TikTok tanpa watermark.
              </p>
          </section>
          <section className='content'>
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
              <Link to={'/tiktok'}>
                <h4>Tiktok</h4>
                <span>Tiktok Downloader</span>
              </Link>
              </div>
            </div>
          </section>
          <section className='tips'>
                <h2>Cara Menggunakan Go Downloader</h2>
                <ol>
                  <li>Buka halaman dengan video yang ingin kamu unduh di perangkat seluler kamu</li>
                  <li>Ketuk "Bagikan" dan ketuk "Salin tautan". Tempel tautan pada halaman utama situs web kami dan ketuk "Download"</li>
                  <li>Pilih apa yang ingin Anda konversi video, baik itu mp4 atau mp3.</li>
                </ol>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
