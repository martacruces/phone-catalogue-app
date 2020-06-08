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
};
  
module.exports = phonesRoutes;