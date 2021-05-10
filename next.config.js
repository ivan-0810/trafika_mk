const withImages = require('next-images');

module.exports = withImages(
    {
        images: {
          domains: ['cdn.bizniskatalog.mk','vesnik.com', 'localhost:3000'],
        },
      }
);
