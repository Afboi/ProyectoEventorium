import { useEffect, useState } from "react";

export const useFetchAllEventDetail = (id) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://eventoriumbackend.test/api/events/${id}`);
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

export const useFetchEventDetail = (id) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://eventoriumbackend.test/api/eventDetail/${id}`);
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