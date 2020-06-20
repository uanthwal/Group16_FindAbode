import React, { createContext, Component } from 'react'

export const UserContext = createContext();

class UserContextProvider extends Component {
  state = {
    email: '',
    login: false
  }
  credential = (email) => {
    this.setState({
      email: email,
      login: !this.state.login
    });
  }
  render() {
    return (
      <UserContext.Provider value={{ ...this.state, credential: this.credential }}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
export default UserContextProvider