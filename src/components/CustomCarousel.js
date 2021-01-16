import React from 'react';

class CustomCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
        <div className="carousel-inner">
          <div className="carousel-item active" style={{height: '150px'}}>
            <p id="temoin">“ Jarvis m’aide au quotidien, je n’ai plus à me<br/>soucier de la maladie il pense à tout pour moi ”<br/><br/>Lea, 25 ans</p>
          </div>
          <div className="carousel-item" style={{height: '150px'}}>
            <p id="temoin">“ J'adore Jarvis ! ”<br/><br/>Marco, 15 ans</p>
          </div>
          <div className="carousel-item" style={{height: '150px'}}>
            <p id="temoin">“ Incroyable ! ”<br/><br/>Marie, 32 ans</p>
          </div>
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" style={{'backgroundColor': '#FF9924'}}></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"                    style={{'backgroundColor': '#FF9924'}}></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"                    style={{'backgroundColor': '#FF9924'}}></li>
          </ol>
        </div>
      </div>
    );
  }
}

export default CustomCarousel;