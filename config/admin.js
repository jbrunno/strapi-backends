module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8f16d844ebb696468ca6a958506e2862'),
  },
});
