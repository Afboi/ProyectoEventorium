import { useEffect, useState } from "react";

export const useFetchUsers = (id) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://eventoriumbackend.test/api/user/all`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
  };
};