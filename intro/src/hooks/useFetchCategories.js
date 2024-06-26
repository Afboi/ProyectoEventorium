import { useEffect, useState } from "react";

export const useFetchCategories = (id) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://eventoriumbackend.test/api/categories`);
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
