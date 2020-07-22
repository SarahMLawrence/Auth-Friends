import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendList = (props) => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res);
        setFriends(res.data);
      });
  }, []);

  const removeFriend = (e, id) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/api/friends/${id}`)
      .then((res) => setFriends(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="friends-list">
      {friends ? (
        friends.map((friend) => {
          return (
            <div className="friends" key={friend.id}>
              <ul>
                <img
                  avatar
                  src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                  onClick={(e) => removeFriend(e, friend.id)}
                />
                <li>{friend.name}</li>
                <li>{friend.email}</li>
              </ul>

              <button onClick={(e) => removeFriend(e, friend.id)}>
                Remove
              </button>
            </div>
          );
        })
      ) : (
        <h1>HELLOOOOO</h1>
      )}
    </div>
  );
};
export default FriendList;
