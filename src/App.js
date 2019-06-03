import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    success: false
  };

  componentDidMount() {
    axios
      .get("https://api.jsonbin.io/b/5b97f370db948c68635f6dbc")
      .then(response => {
        this.setState({
          users: response.data.data,
          success: response.data.success
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user, index) => {
            return (
              <li key={index}>
                ID: {user.id}, name {user.name}
              </li>
            );
          })}
        </ul>
        <span>Success: {this.state.success ? "true" : "false"}</span>
      </div>
    );
  }
}

export default App;
