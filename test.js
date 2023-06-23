import axios from 'axios';

const options = {
  method: 'PATCH',
  url: 'https://miro.com/api/v1/scim/Users/XXXXX',
   headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: 'Bearer XXXXX'
  },
  data: {
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:PatchOp"
  ],
  "Operations": [
    {
      "op": "Replace",
      "path": "active",
      "value": "true"
    }
  ]
 }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
