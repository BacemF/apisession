import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "./Spinner";

const Details = () => {
  const [user, setUser] = useState(null);
  const [isLoding, setIsLoding] = useState(true);
  console.log(user);
  const { id } = useParams();
  //   console.log(id);
  const getUser = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setIsLoding(false);
      setUser(res.data.find((el) => el.id == id));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, [id]);

  return (
    <div>
      <Link to="/">
        <button>home</button>
      </Link>
      {isLoding ? (
        <div>
          <Spinner />
          <h1>Loading ...</h1>
        </div>
      ) : (
        user && (
          <>
            <h1>name :{user.name}</h1>
          </>
        )
      )}
    </div>
  );
};

export default Details;
