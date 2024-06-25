export const useFetchLogOut = async () => {
    try {
      const response = await fetch("http://eventoriumbackend.test/api/LogOut");
      await removeToken();
      return await response.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };