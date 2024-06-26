import { useEffect, useState } from "react";

export const useFetchAllEventDetail = (id) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://eventoriumbackend.test/api/userEvents/${id}`);
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

export const useFetchUserEventDetail = (id, userID) => {
  const [eventData, setEventData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(`http://eventoriumbackend.test/api/userEventDetail/${id}/${userID}`);
      const data = await response.json();
      setEventData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    eventData,
    isLoading,
  };
};

export const useFetchUserEventsComplete = (id) => {
  const [dataComplete, setDataComplete] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://eventoriumbackend.test/api/userEventsComplete/${id}`);
      const data = await response.json();
      setDataComplete(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    dataComplete,
  };
};

export const useFetchUserEventsIncomplete = (id) => {
  const [dataIncomplete, setDataIncomplete] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://eventoriumbackend.test/api/userEventsIncomplete/${id}`);
      const data = await response.json();
      setDataIncomplete(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    dataIncomplete,
  };
};