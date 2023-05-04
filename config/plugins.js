module.exports = ({env}) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  'import-export-entries': {
    enabled: true,
  },
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_CLOUD_NAME'),
      api_key: env('CLOUDINARY_API_KEY'),
      api_secret: env('CLOUDINARY_API_SECRET'),
    },
  },
});
