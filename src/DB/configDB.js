var fs = require('fs');
var cassandra = require('cassandra-driver');
var authProvider = new cassandra.auth.PlainTextAuthProvider("Dev-at-502121111238", "0JpQapETf8KQ2XUzd/rkbm6dR2rhaVVEDARM+itDZrc=");
var contactPoints = ['cassandra.us-east-1.amazonaws.com:9142'];
var sslOptions = {
  cert: fs.readFileSync('AmazonRootCA1.pem'),
  host: 'cassandra.us-east-1.amazonaws.com',
  rejectUnauthorized: true
};
const client = new cassandra.Client(
  {
    contactPoints: contactPoints, 
    authProvider: authProvider, 
    localDataCenter: 'us-east-1', 
    keyspace:'tutorialkeyspace', 
    sslOptions: sslOptions
  }
);

module.exports = client