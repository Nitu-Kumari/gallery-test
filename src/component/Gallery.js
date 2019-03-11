import React, { Component } from 'react';
import Axios from 'axios';



class Gallery extends Component {
constructor(){
super();
this.handleSubmit=this.handleSubmit.bind(this);
}

handleSubmit(event){
  event.preventDefault();
  const data=new FormData(event.target);
  fetch('http://localhost:7000/gallerys',{
    method:'POST',
    body:data,

}); 
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
          <button type="submit"> Upload</button>
        </form>
        <div>
          <hr />
          {
            this.state.images.length ? this.state.images.map(image => {
              return (
                <div>
                  <img src={image.image} alt=""/>
                </div>
              )
            }): "No images found"
          }
        </div>
    </div>
    );
  }
}
export default Gallery;
