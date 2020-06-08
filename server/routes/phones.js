const express = require('express');

const phonesRoutes = (app, fs) => {
  const phones = './phone-catalogue/phones.json'

  app.get('/phones', (req, res) => {
    fs.readFile(phones, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.use('/phone-images', express.static('./phone-catalogue/images'));
};

module.exports = phonesRoutes;