import React, { Component } from 'react'
import axios from 'axios'
import { LeftSide } from './Header'
export default class TikTok extends Component {
  constructor(props) {
    super(props)
    this.state = {
       query:'',
       result:'',
       judul:''
    }    
    this.inputRef = React.createRef()
    this.tampilHasil = this.tampilHasil.bind(this)
  }
  componentDidMount(){
    this.inputRef.current.focus()
    this.setState({
      query:this.inputRef.current.value
    })
  }
  handleChange=()=>{
    this.setState({
      query:this.inputRef.current.value
    })
    const link = this.state.query
    const self = this
    console.log(this.state.query)
    const options = {
    method: 'GET',
    url: 'https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index',
    params: {url: link},
    headers: {
        'X-RapidAPI-Key': 'xx',
        'X-RapidAPI-Host': 'tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com'
        }
    };
    axios.request(options).then(function (response) {
        console.log(response.data)
        self.setState({
            result: response.data.video[0],
            judul: response.data.description[0]
        })
    }).catch(function (error) {
        console.error(error);
    });
    }
   
  tampilHasil(){  
    if(this.state.result===''){
      return(
        <span>Tidak ada video</span>
      )
    }
    else{
      return(
      <div>
        <a href={this.state.result}>Download Video</a>
      </div>
      )
    }
  }
  render() {
    const ig={
      backgroundColor: 'rgb(180, 176, 176)'
    }
    return (
      <main>
        <LeftSide/>
        <div className='right-side'>
          <section className='intro yt-page'>
            <h2>Unduh video dan audio dari TikTok</h2>
            <div className="form" style={ig}>
              <input type="text" ref={this.inputRef} placeholder="Paste link disini"></input>
              <button onClick={this.handleChange} type='submit'><i class="fa-solid fa-download"></i></button>
            </div>
            <this.tampilHasil/>
          </section>
        </div>
      </main>
    )
  }
}


