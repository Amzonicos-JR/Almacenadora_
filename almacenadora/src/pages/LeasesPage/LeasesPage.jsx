import axios from "axios";
import React, { useEffect, useState } from "react";
import { Lease } from "../../components/Lease/Lease";

export const LeasesPage = () => {
  const [leases, setLeases] = useState([{}]);

  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  const getLeases = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/lease/get", {
        headers: headers,
      });
      if (data.leases) {
        setLeases(data.leases);
        console.log(data.leases);
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error getting cellars");
    }
  };

  useEffect(() => {
    getLeases();
  }, []);


  return (
    <>
      <h1>Lease Page</h1>
      {leases.map(({ _id, account, cellar, Services, user,  total }, i) => (
        <Lease 
            key={i}
            account={account}
            cellar={cellar}
            user={user}
            total={total} />
      ))}
    </>
  );
};
