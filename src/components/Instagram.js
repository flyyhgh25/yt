import React, { Component } from 'react'
import axios from 'axios'
import { LeftSide } from './Header'

export default class Instagram extends Component {
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
        url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
        params: {url: link},
        headers: {
          'X-RapidAPI-Key': '2c28dc03d4msh9937a7e4c8d572bp133e2djsn53a869a66c94',
          'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        console.log(response.data);
        self.setState({
          result : response.data.media,
          judul:response.data.title
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
        <span>{this.state.judul}</span> <br/>
        {/* {this.state.result} */}
        <a href={this.state.result}>Download Video</a>
      </div>
      )
    }
  }

 
  render() {
    const ig={
      backgroundColor: '#ef07c8'
    }
    return (
      <main>
        <LeftSide/>
        <div className='right-side'>
          <div className='yt-page'>
            <h2>Unduh video dan audio dari Instagram</h2>
            <div className="form" style={ig}>
              <input type="text" ref={this.inputRef} placeholder="Paste link disini"></input>
              <button onClick={this.handleChange} type='submit'><i class="fa-solid fa-download"></i></button>
            </div>
            <this.tampilHasil/>
          </div>
        </div>
      </main>
    )
  }
}


