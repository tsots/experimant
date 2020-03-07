const imagemin = require('imagemin'),
  imageminMozjpeg = require('imagemin-mozjpeg'),
  imageminPngquant = require('imagemin-pngquant');

const PNGImages = 'src/img/*.png';
const JPEGImages = 'src/img/*.jpg';
const output = 'dist/img';

const optimiseJPEGImages = () =>
  imagemin([JPEGImages], output, {
    plugins: [
      imageminMozjpeg({
        quality: 70
      })
    ]
  });

optimiseJPEGImages().catch(error => console.log(error));

const optimisePNGImages = () =>
  imagemin([PNGImages], output, {
    plugins: [imageminPngquant({ quality: '65-80' })]
  });

optimiseJPEGImages()
  .then(() => optimisePNGImages())
  .catch(error => console.log(error));
