import React, { Component } from 'react';
import Axios from 'axios';
import ModalImage from 'react-modal-image'

class Gallery extends Component {
constructor(){
super();
this.state={images:[]}
this.handleSubmit=this.handleSubmit.bind(this);
}

handleSubmit(event){
  event.preventDefault();
  const data=new FormData(event.target);
  fetch('http://localhost:7000/gallerys',{
  method:'POST',
  body:data,
  }).then(response => response.json())
  .then(data => this.setState({images: [...this.state.images, data]})); 

  }

  componentDidMount() {
    this.getAllImages();
  }
  getAllImages = () => {
    // make api url in a variable 
    let url = 'http://localhost:7000/gallerys';

    Axios.get(url)
      .then(res => {
        console.log(res);
        this.setState({
          images: res.data
        })
      })
  }

  render() {
    return (
      <div>
        <div className="alert alert-success" role="alert">
        Welcome to Gallery App
        </div> 
        <form  onSubmit={this.handleSubmit}>  
        <div>
    <input type="file" name="gallery" id="gallery" />
            <br />
          </div>
          <button className="btn btn-primary" type="submit" >Upload</button>
        </form>
    
        <div>
          <hr />
          <div class="container">
         <div class="row col-xs-2">
          {
            this.state.images.length ? this.state.images.map(image => {
              return (
                       <div>
                        <ModalImage
                        className="image"   
                        small={image.image}
                         large={image.image}
                          alt={image.name}
                               />
                           </div>
              )
            }): "image"
          }
        </div>
    </div>
    </div>
    </div>
    );
  }
}
export default Gallery;
