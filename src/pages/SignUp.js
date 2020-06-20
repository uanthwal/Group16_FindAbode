import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext'

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class SignUp extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);

    this.state = {
      username: undefined,
      email: undefined,
      password: undefined,
      formError: {
        username: '',
        email: '',
        password: ''
      },
      result: ''
    }
  }

  onChange = e => {
    const { name, value } = e.target;
    let formError = this.state.formError;
    switch (name) {
      case 'username':
        formError.username = value.length < 3 ? 'minimum 3 characters required' : '';
        break;
      case 'email':
        formError.email = emailRegex.test(value) ? '' : 'invalid email address';
        break;
      case 'password':
        formError.password = value.length < 6 ? 'minimum 6 characters required' : '';
        break;
      default:
        break;
    }
    this.setState({ formError, [name]: value });
  }

  formValid = ({ formError, ...rest }) => {
    let valid = true;
    Object.values(formError).forEach(val => { val.length > 0 && (valid = false) });
    Object.values(rest).forEach(val => { val === undefined && (valid = false) });
    return valid;
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const { credential } = this.context;
    let flag = false;
    const { username, email, password } = this.state

    if (this.formValid(this.state)) {
      await axios.get('https://a2-ruize-nie.herokuapp.com/signup/' + email)
        // await axios.get('http://localhost:5000/signup/' + email)
        .then(res => {
          if (res.data.length !== 0) {
            this.setState({
              result: 'This email address has been token'
            })
          } else {
            flag = true;
            credential(email);
            this.setState({
              result: ''
            })
          }
        });
    } else {
      this.setState({
        result: 'Please fill out all the entry and make sure you meet all the requirement'
      })
    }

    if (flag) {
      const user = {
        username, email, password
      }

      axios.post('https://a2-ruize-nie.herokuapp.com/signup', user)
        // axios.post('http://localhost:5000/signup', user)
        .then(res => console.log(res.data));

      this.setState({
        username, email, password
      })

      this.props.history.push({
        pathname: '/'
      })
    }
  }

  render() {
    const { username, email, password, result, formError } = this.state
    return (
      <div className="sign-main-container">
        <section className="sign-side"></section>
        <section className="sign-content">
          <div className="sign-container">
            <form onSubmit={this.onSubmit} className="sign-form" noValidate>
              <h2>Sign up to FindAbode</h2>
              <div className="social-container">
                <Link to="" className="facebook"><i className="fab fa-facebook-f"></i></Link>
                <Link to="" className="google"
                ><i className="fab fa-google-plus-g"></i
                ></Link>
                <Link to="" className="linkedin"
                ><i className="fab fa-linkedin-in"></i
                ></Link>
              </div>
              <hr className="divider" />
              {result.length > 0 && (
                <span className="error-message">{result}</span>
              )}
              <label htmlFor="username">Username</label>
              <input className={formError.username.length > 0 ? "input-field error" : "input-field"} type="text" name="username" id="username"
                value={username || ''}
                onChange={this.onChange} noValidate />
              {formError.username.length > 0 && (
                <span className="error-message">{formError.username}</span>
              )}
              <label htmlFor="email">Email Address</label>
              <input className={formError.email.length > 0 ? "input-field error" : "input-field"} type="email" name="email" id="emial"
                value={email || ''}
                onChange={this.onChange} noValidate />
              {formError.email.length > 0 && (
                <span className="error-message">{formError.email}</span>
              )}
              <label htmlFor="password">Password</label>
              <input
                className={formError.password.length > 0 ? "input-field error" : "input-field"}
                type="password"
                name="password"
                id="password"
                placeholder="6+ Characters"
                value={password || ''}
                onChange={this.onChange} noValidate />
              {formError.password.length > 0 && (
                <span className="error-message">{formError.password}</span>
              )}
              <input
                className="button"
                type="submit"
                value="Create Account"
              />
            </form>
          </div>
        </section>
      </div>
    )
  }
}

export default withRouter(SignUp);
