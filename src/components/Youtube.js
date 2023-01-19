import React, { Component } from 'react'
import axios from 'axios'
import { LeftSide } from './Header'

export default class Youtube extends Component {
  constructor(props) {
    super(props)
    this.state = {
       query:'',
       result:'',
       judul:''
    }    
    this.tampilHasil = this.tampilHasil.bind(this)
  }

  handleChanged = (e)=>{
    this.setState({
      query:e.target.value,
    })
    console.log(this.state.query)
    const link = this.state.query
    console.log(link)
    if(link!==''){
      const nLink = link.split("v=")[1].split("&")[0]
      console.log(nLink)
      var self = this
      const options = {
        method: 'GET',
        url: 'https://youtube-mp36.p.rapidapi.com/dl',
        params: {id: nLink},
        headers: {
            'X-RapidAPI-Key': 'xxx',
            'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
        }
        };
        axios.request(options).then(function (response) {
            self.setState({
              result : response.data.link,
              judul:response.data.title
            })
        }).catch(function (error) {
            console.error(error);
        });
    }
   
    }
  handleSubmit=(e)=>{
    e.preventDefault()
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
        <a href={this.state.result}>Download MP3</a>
      </div>
      )
    }
  }

 
  render() {
    const yt={
      backgroundColor: 'red'
    }
   
    return (
      <main>
        <LeftSide/>
        <div className='right-side'>
          <div className='yt-page'>
            <h2>Unduh video dan audio dari YouTube</h2>
            <form className="form"onSubmit={this.handleSubmit} style={yt}>
              <input type="text" onChange={this.handleChanged}value={this.state.query}name="query" placeholder="Paste link disini"></input>
              <button type='submit'><i class="fa-solid fa-download"></i></button>
            </form>
            <this.tampilHasil/>
          </div>
        </div>
      </main>
    )
  }
}


