import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const useFetchUsers = (username, password) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const history = useHistory(); 

  const getData = async () => {
    try {
      const response = await fetch(`http://eventoriumbackend.test/api/user/all`);
      const users = await response.json();
      const userExists = users.some(user => user.username === username && user.password === password);
      if (userExists) {
        history.push("/Homepage");
      } else {
        setError("This user doesn't exist");
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred while fetching the data.");
    }
  };

  useEffect(() => {
    getData();
  }, [username, password]);
  
  return {
    data,
    error,
  };
};


