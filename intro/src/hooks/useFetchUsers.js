import { useState, useEffect } from "react";

export const useFetchUsers = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const getData = async () => {
    try {
      console.log(localStorage.getItem('token'));
      const response = await fetch('http://eventoriumbackend.test/api/token', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
      });
      console.log(response);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
      const id = data.id;
    }
    catch (err) {
      console.log(err, "Error in user data request");
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    data,
    isLoading
  }
}



