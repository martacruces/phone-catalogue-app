const express = require('express');

const phonesRoutes = (app, fs) => {
  const phones = './phone-catalogue/phones.json';
  const phoneImagesPath = 'phone-images';

  app.get('/phones', (req, res) => {
    fs.readFile(phones, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      const phones = JSON.parse(data).map((item) => Object.assign({}, item, {
        imageFileName: `${phoneImagesPath}/${item.imageFileName}`
      }));
      res.send(phones);
    });
  });

  app.use(`/${phoneImagesPath}`, express.static('./phone-catalogue/images'));
};

module.exports = phonesRoutes;