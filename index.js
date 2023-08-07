const functions = require('@google-cloud/functions-framework');
const siteinfomaster = require('./brandcatalog/siteinfo.js');
// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
functions.http('helloGET', (req, res) => {
  res.status(200).json( {"brands":siteinfomaster.getAllBrands()});
});

