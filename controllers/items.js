const router = require('express').Router();
const Item = require('../db/connection').models.Item;

//find all Items and display for buyer
router.get('/buyers/items', (req, res) => {
  Item.findAll().then(items => {
    res.json(items);
  });
});

// find single Item and display for buyer
router.get('/buyers/items/:id', (req, res) => {
  Item.findById(req.params.id).then(item => {
    res.json(item);
  });
});

// find single item and update for buyer
router.put('/buyers/items/:id', (req, res) => {
  Item.findById(req.params.id).then(item => {
    item.updateAttributes(req.body).then(() => {
      Item.findAll().then(items => {
        res.json(items);
      });
    });
  });
});

//find all Items and display for seller
router.get('/sellers/items', (req, res) => {
  Item.findAll().then(items => {
    res.json(items);
  });
});

// find single Item and display for sellers
router.get('/sellers/items/:id', (req, res) => {
  Item.findById(req.params.id).then(item => {
    res.json(item);
  });
});

// find single item and update for seller
router.put('/sellers/items/:id', (req, res) => {
  Item.findById(req.params.id).then(item => {
    item.updateAttributes(req.body).then(() => {
      Item.findAll().then(items => {
        res.json(items);
      });
    });
  });
});

//create a new item and display all for seller
router.post('/sellers/items', (req, res) => {
  Item.create(req.body).then(() => {
    Item.findAll().then(items => {
      res.json(items);
    });
  });
});

//delete item by seller then display all for seller
router.delete('/sellers/items/:id', (req, res) => {
  Item.findById(req.params.id).then(item => {
    item.destroy().then(() => {
      Item.findAll().then(items => {
        res.json(items);
      });
    });
  });
});

module.exports = router;
