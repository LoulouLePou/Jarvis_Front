import './App.css';
import JarvisLogo from './LOGO_JARVIS_ORANGE 1.svg';
import background from './illu_jarvis1.svg'
function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <div class="row">

          <div class="col-sm-12 col-lg-6">
            <img id="logo" src={JarvisLogo} alt="Jarvis Logo"/>
            <h1 class="text-left" id="titre">Le partenaire qui vous réapprend à vivre avec votre diabète</h1>
            <p class="text-left" id="texte">Jarvis est une application mobile visant à apporter aux personnes diabétiques un accompagnement complet et quotidien dans la gestion de leur maladie.</p >
            <img id="frame" src={background} alt="Background"/>
          </div>
          <div class="col-sm-12 col-lg-6">
            <div id="carre">
              <h1 id="sub">Inscrivez-vous</h1>
              <p id="actu">Pour suivre l’actualité de Jarvis</p>
              <form>
                <div class="form-group">
                  <input type="Nom" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nom"/>
                </div>
                <div class="form-group">
                  <input type="Prénom" class="form-control" id="exampleInputPassword1" placeholder="Prénom"/>
                </div>
                <div class="form-group">
                  <input type="Adresse email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Adresse email"/>
                </div>
                <button type="submit">S’inscrire</button>
              </form>
            </div>


            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
              <div class="carousel-inner">
                <div class="carousel-item active" style={{height: '150px'}}>
                  <p id="temoin">“ Jarvis m’aide au quotidien, je n’ai plus à me<br/>soucier de la maladie il pense à tout pour moi ”<br/><br/>Lea, 25 ans</p>
                </div>
                <div class="carousel-item" style={{height: '150px'}}>
                  <p id="temoin">“ J'adore Jarvis ! ”<br/><br/>Marco, 15 ans</p>
                </div>
                <div class="carousel-item" style={{height: '150px'}}>
                  <p id="temoin">“ Incroyable ! ”<br/><br/>Marie, 32 ans</p>
                </div>
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" style={{'background-color': '#FF9924'}}></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1" style={{'background-color': '#FF9924'}}></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2" style={{'background-color': '#FF9924'}}></li>
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
