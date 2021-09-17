const requests = {
  apodImages: `planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`,
  mrpFHAZImages: `mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${process.env.REACT_APP_API_KEY}`,
};

export default requests;
