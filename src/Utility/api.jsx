import axios from "axios";


const getRandomUser = async () => {
  const response = await axios.get(
    "https://random-data-api.com/api/v2/users?size=2&is_xml=true",
    {
      header: {},
      params: {
        size: 1,
      },
    }
  );

  //    axios.get('/users')
  //     .then(res => {
  //       console.log(res.data);
  //     });

  return response;
};

export {getRandomUser}

