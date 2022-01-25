module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6a47e1220ce4d434687029747fca6be6'),
  },
});
