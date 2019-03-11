import React, { Component } from 'react';
import Axios from 'axios';



class Gallery extends Component {

  state = {
    images: []
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

  fileSubmitHandler = e => {

  }

  selectFileHandler = e => {

  }


  submitForm(e){
    e.preventDefault()
    

  }


  render() {
    return (
      <div>
        <div className="alert alert-success" role="alert">
        Welcome to Gallery App
        </div>
       
        <form action="http://localhost:7000/gallerys" encType="multipart/form-data" method="post"  >
          <div>
            <input type="file" name="gallery" id="gallery" />
            <br />
          </div>
          <button className="btn btn-primary" type="submit" >Upload</button>
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
