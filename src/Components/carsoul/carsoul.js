import React from 'react'
import "../../App.css"
import img from "../pics/carsoul.jpg"


function Carsoul() {
    return (
      <>
      <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100 " src={img} alt="First slide"/>
          <div class="carousel-caption d-none d-md-block">
    <h5>She Codes from Africa</h5>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
    </p>
  </div>
        </div>          
        <div className="carousel-item">
          <img className="d-block w-100 " src={img} alt="Second slide"/>
          <div class="carousel-caption d-none d-md-block">
    <h5>Google Summer of Code in Jenkins</h5>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
    </p>
  </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={img} alt="Third slide"/>
          <div class="carousel-caption d-none d-md-block">
    <h5>She Codes from Africa</h5>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
    </p>
  </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    </>
    )
}

export default Carsoul
