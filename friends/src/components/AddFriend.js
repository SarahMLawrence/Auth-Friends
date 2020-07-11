import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
  state = {
    friends: {
      name: "",
      email: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", this.state.friends)
      .then((res) => {
        console.log(res);
        this.props.history.push("/protected");
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="add-friend">
        <h1 className="title">Add New Friend</h1>
        <form action="/add-friend" onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            autoComplete="off"
          />

          <button className="addButton" type="submit">
            Add Friend
          </button>
        </form>
      </div>
    );
  }
}
export default AddFriend;
