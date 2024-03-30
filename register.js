// const axios = require('axios');

// const data = { "company name": "vikram",
// "ownername":"vikraman",
// "rollno":"20mid0231",
// "owneremail":"vikramanktv@gmail.com",
// "accesscode":" Avvsyl" };  // Replace with your actual data object

// axios.post('http://20.244.56.144/test/register', data)
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

const axios = require('axios');

const data = {
  "companyName": "vikram",
  "ownername": "vikraman",
  "rollno": "20mid0231",
  "owneremail": "vikramanktv@gmail.com",
  "accesscode": "Avvsyl"
}; 
axios.post('http://20.244.56.144/test/register', data)
  .then(response => {
    console.log("API Response Status:", response.status); // Log the response status code
    console.log("API Response Data:", response.data); // Log the entire response object
  })
  .catch(error => {
    console.error("Error:", error); // Log the error object
  });

