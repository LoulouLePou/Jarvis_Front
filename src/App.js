import './App.css';
import JarvisLogo from './media/LOGO_JARVIS_ORANGE 1.svg';
import background from './media/illu_jarvis1.svg'
import NewsletterForm from './components/NewsletterForm'

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">

          <div className="col-sm-12 col-lg-6">
            <img id="logo" src={JarvisLogo} alt="Jarvis Logo"/>
            <h1 className="text-left" id="titre">Le partenaire qui vous réapprend à vivre avec votre diabète</h1>
            <p className="text-left" id="texte">Jarvis est une application mobile visant à apporter aux personnes diabétiques un accompagnement complet et quotidien dans la gestion de leur maladie.</p >
            <img id="frame" src={background} alt="Background"/>
          </div>
          <div className="col-sm-12 col-lg-6">
          
          <NewsletterForm/>

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
