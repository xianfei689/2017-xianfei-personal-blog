// module.exports = {
  // port: 8000,
  // session: {
    // secret: 'myblog',
    // key: 'myblog',
    // maxAge: 2592000000
  // },
  // mongodb: 'mongodb://localhost:27017/myblog'
// };
module.exports = {
  port: 80,
   session: {
     secret: 'myblog',
     key: 'myblog',
     maxAge: 2592000000
   },
  mongodb: 'mongodb://myblog:myblog@ds145289.mlab.com:45289/myblog'
};
