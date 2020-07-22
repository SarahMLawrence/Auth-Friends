import React, { Component } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Date.now,
      name: "",
      age: "",
      email: "",
      errorMsg: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/friends", this.state)
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
        <form action="/protected" onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            autoComplete="off"
          />
          <label>Age: </label>
          <input
            type="text"
            name="age"
            onChange={this.handleChange}
            value={this.state.age}
            autoComplete="off"
          />

          <label>Email: </label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
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
