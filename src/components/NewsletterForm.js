import React from 'react';
import network from '../config/network.json';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        lastname: '',
        email: '',
        errors: {emptyName: '', emptyLastname: '', emptyEmail: '', badEmail: ''}
    };
  }

  handleValidation = (type) => {
      const { name, lastname, email} = this.state;
      let errors = this.state.errors;

      if (!name && type[0] === "name")
        errors.emptyName = "You must renseign a name sir";
      else if (type[0] === "name") 
        errors.emptyName = '';
      if (!lastname && type[0] === "lastname")
        errors.emptyLastname = "You must renseign a lastname sir";
      else if (type[0] === "lastname") 
        errors.emptyLastname = '';
      if (!email && type[0] === "email")
        errors.emptyEmail = "You must renseign an email sir";
      else if (type[0] === "email") 
        errors.emptyEmail = '';

      this.setState({ errors });
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value},() => {this.handleValidation([event.target.name])});
  }


  handleSubmit = (event) => {
    let params = this.state;
    if (!params.name || !params.lastname || !params.email)
      event.preventDefault();
    const req = network.endpoint + network.newsletter.url;
    const method = network.newsletter.method;
    fetch(req, {
        method: method,
        body: JSON.stringify({
          name: params.name,
          lastname: params.lastname,
          email: params.email
          })
      }).then(function(response) {
        console.log(response)
        return response.json();
      });

    event.preventDefault();
}

  render() {
    const { errors } = this.state;

    return (
        <div id="carre">
            <h1 id="sub">Inscrivez-vous</h1>
            <p id="actu">Pour suivre l’actualité de Jarvis</p>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="Nom" value={this.state.name} onChange={this.handleChange}
                            className="form-control" id="NameInput" name="name" aria-describedby="NameInput" placeholder="Nom"/>
                    {errors.emptyName !== '' &&
                    <span id="inputError">{errors.emptyName}</span>
                    }
                </div>
                <div className="form-group">
                    <input type="Prénom" value={this.state.lastname} onChange={this.handleChange}
                        className="form-control" id="LastNameInput" name="lastname" aria-describedby="LastNameInput" placeholder="Prénom"/>
                    {errors.emptyLastname !== '' &&
                    <span id="inputError">{errors.emptyLastname}</span>
                    }
                </div>
                <div className="form-group">
                    <input type="Adresse email" value={this.state.email} onChange={this.handleChange}
                        className="form-control" id="EmailInput" name="email" aria-describedby="EmailInput" placeholder="Adresse email"/>
                    {errors.emptyEmail !== '' &&
                    <span id="inputError">{errors.emptyEmail}</span>
                    }
                    {errors.emptyEmail === '' && errors.badEmail !== '' &&
                    <span id="inputError">{errors.badEmail}</span>
                    }
                </div>
                <button type="submit" value="Submit">
                    S’inscrire
                </button>
            </form>
        </div>
    );
  }
}

export default NewsletterForm;