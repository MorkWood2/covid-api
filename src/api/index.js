//api fetch
import axios from 'axios';
//endpoint
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    //response.data destructure
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};
