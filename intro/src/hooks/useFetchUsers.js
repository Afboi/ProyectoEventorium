import { useState, useEffect } from "react";

export const useFetchUsers = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    console.log(localStorage.getItem('token'));
    const response = await fetch('http://eventoriumbackend.test/api/user/token', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
    });

    const data = await response.json();
    console.log(data);
    const id = data.id;
    try {
      const response = await fetch(`http://eventoriumbackend.test/api/user/${id}`);
      const data = await response.json();
      setData(data);
      setIsLoading(false)
    } catch (err) {

    }
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    data,
    isLoading,
  }
}



