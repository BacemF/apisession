import React from "react";
import UserCard from "./UserCard";
import Spinner from "./Spinner"

const UserList = ({ users, loading }) => {
  return (
    <div>
          {loading?<Spinner/>:
              users &&
        React.Children.toArray(users.map((el) => <UserCard user={el} />))}
    </div>
  );
};

export default UserList;
