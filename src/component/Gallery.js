import React, { Component } from 'react';
import Clock from 'react-live-clock';
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

  render() {
    return (
      <div>
        <div className="alert alert-success" role="alert">
        Welcome to Gallery App
        </div>
        
        <form action="" encType="multipart/form-data" onSubmit={this.fileSubmitHandler}  >
          <div>
            <input type="file" name="general" id="general" onChange={this.selectFileHandler} />
            <br />
          </div>
          <button className="btn btn-primary" type="submit" >Submit File</button>
          
          
        </form>

        <div>
          <hr />

         
          {
            this.state.images.length ? this.state.images.map(image => {
              return (
                <div>
                  <img src={image} alt=""/>
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
