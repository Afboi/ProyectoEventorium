import { useEffect, useState } from "react";

export const useFetchSearchUserEvents = (userId) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://eventoriumbackend.test/api/searchUserEvents/${userId}`);
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

export const useFetchSearchUserEvents_Event = (userId, categoryName) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://eventoriumbackend.test/api/searchUserEvents/${userId}/${categoryName}`);
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

export const useFetchSearchUserEvents_Course = (userId, courseInitial) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://eventoriumbackend.test/api/searchUserEvents/${userId}//${courseInitial}`);
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

export const useFetchSearchUserEvents_Event_Course = (userId, categoryName, courseInitial) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://eventoriumbackend.test/api/searchUserEvents/${userId}/${categoryName}/${courseInitial}`);
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

export const useFetchSearchUserEvents_Search = (userId, search) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://eventoriumbackend.test/api/searchUserEvents_Search/${userId}/${search}`);
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

export const useFetchSearchUserEvents_Search_Event = (userId, search, categoryName) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://eventoriumbackend.test/api/searchUserEvents_Search/${userId}/${search}/${categoryName}`);
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

export const useFetchSearchUserEvents_Search_Course = (userId, search, courseInitial) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://eventoriumbackend.test/api/searchUserEvents_Search/${userId}/${search}//${courseInitial}`);
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

export const useFetchSearchUserEvents_Search_Event_Course = (userId, search, categoryName, courseInitial) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://eventoriumbackend.test/api/searchUserEvents_Search/${userId}/${search}/${categoryName}/${courseInitial}`);
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