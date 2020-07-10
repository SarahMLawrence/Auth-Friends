import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
          />

          <input
            type="passwor"
            name="password"
            value={this.state.credentials.password}
          />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
