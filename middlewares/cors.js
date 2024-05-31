const allowedCors = [ 
  "http://frront.nomorepartiesco.ru/",
  "https://baack.nomorepartiesco.ru/"
 ];

const cors = (request, response, next) => {
    const { origin } = request.headers;
  
    if (allowedCors.includes(origin)) {
      response.header('Access-Control-Allow-Origin', "*");
      response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      response.header(
        'Access-Control-Allow-Headers',
        'Content-type,Authorization,Accept,X-Custom-Header',
      );
    }
  
    next();
  };
  
  module.exports = cors;
