const http = require('https');
console.log('jwt', process.env.TMDB_JWT);

const options = {
  method: 'GET',
  hostname: 'api.themoviedb.org',
  port: null,
  path: '/3/movie/974635?language=en-US',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_JWT}`,
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();