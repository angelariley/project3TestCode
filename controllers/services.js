const router = require('express').Router();
const Service = require('../db/connection').models.Service;

//find all Services and display for buyer
router.get('/buyers/services', (req, res) => {
  Service.findAll().then(services => {
    res.json(services);
  });
});

// find single Service and display for buyer
router.get('/buyers/services/:id', (req, res) => {
  Service.findById(req.params.id).then(service => {
    res.json(service);
  });
});

// find single service and update for buyer
router.put('/buyers/services/:id', (req, res) => {
  Service.findById(req.params.id).then(service => {
    service.updateAttributes(req.body).then(() => {
      Service.findAll().then(services => {
        res.json(services);
      });
    });
  });
});

//find all services and display for seller
router.get('/sellers/services', (req, res) => {
  Service.findAll().then(services => {
    res.json(services);
  });
});

// find single service and display for sellers
router.get('/sellers/services/:id', (req, res) => {
  Service.findById(req.params.id).then(service => {
    res.json(service);
  });
});

// find single service and update for seller
router.put('/sellers/services/:id', (req, res) => {
  Service.findById(req.params.id).then(service => {
    service.updateAttributes(req.body).then(() => {
      Service.findAll().then(services => {
        res.json(services);
      });
    });
  });
});

//create a new service and display all for seller
router.post('/sellers/services', (req, res) => {
  Service.create(req.body).then(() => {
    Service.findAll().then(services => {
      res.json(services);
    });
  });
});

//delete service by seller then display all for seller
router.delete('/sellers/services/:id', (req, res) => {
  Service.findById(req.params.id).then(service => {
    service.destroy().then(() => {
      Service.findAll().then(services => {
        res.json(services);
      });
    });
  });
});

module.exports = router;
