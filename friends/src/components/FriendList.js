import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendList = (props) => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get("/friends")
            .then((res) => {
                console.log(res);
                setFriends(res.data);
            });
    }, []);

    return (
        <div className="friends-list">
            {friends ? (
                friends.map((friend) => {
                    return (
                        <div className="friends" key={friend.id}>
                            <ul>
                                <li>{friend.name}</li>
                                <li>{friend.email}</li>
                            </ul>
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
