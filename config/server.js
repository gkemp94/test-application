module.exports = ({ env }) => {
  
  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: env("NODE_ENV") === "production" ? 'https://api.coderecess.com/test' : undefined,
  }
}
