import axios from "axios";
//api route that i want to hit
const API_URL = `${process.env.REACT_APP_API_URL}/api/scrapt/`;
//getScraptedData
const getScraptedData = async (body) => {
  //get all data
  const response = await axios.post(API_URL, body);
  //return response
  return response.data;
};

//export scrapperService
const scrapperService = {
  getScraptedData,
};

export default scrapperService;
