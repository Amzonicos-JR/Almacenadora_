import React, { useEffect, useState } from "react";
import { User } from "../../components/User/User";
import axios from "axios";

export const UsersPage = () => {
  const [users, setUsers] = useState([{}]);
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  const getUsers = async () => {
    try {
      const { data } = await axios("http://localhost:3000/user/getUsers", {
        headers: headers,
      });
      if (data.users) {
        setUsers(data.users);
        console.log(data.users);
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error getting users");
    }
  };

  useEffect(() => getUsers, []);

  return (
    <>
      <h1>Users Page</h1>
      {users.map(
        ({ name, surname, username, phone, role}, i) => {
          return(
            <User
                key={i}
                name={name}
                surname={surname}
                username={username}
                phone={phone}
                role={role}
            ></User>
          );
        }
      )}
    </>
  );
};
