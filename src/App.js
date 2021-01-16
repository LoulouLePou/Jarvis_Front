import './App.css';
import JarvisLogo from './media/LOGO_JARVIS_ORANGE 1.svg';
import background from './media/illu_jarvis1.svg';
import NewsletterForm from './components/NewsletterForm';
import CustomCarousel from './components/CustomCarousel';

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
            <CustomCarousel/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
