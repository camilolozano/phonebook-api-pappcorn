import express from 'express';
import { contacts } from '../models';

const router = express.Router();

// get all contacts
router.get('/', async (req, res) => {
  contacts.findAll().then(contacts => {
    res.json({
      contacts
    });
  }).catch(err => console.log(err));
});

// get specific contacg
router.get('/:id', async (req, res) => {
  contacts.findAll({
    where: {
      idContact: req.params.id
    }
  }).then(contact => {
    res.json({
      contact
    });
  }).catch(err => console.log(err));
});

// edit contact
router.put('/', async (req, res) => {
  const attributes = req.body;
  contacts.findOne({
    where: {
      idContact: attributes.id
    }
  }).then((contact) => {
    return contact.updateAttributes({
      name: attributes.name,
      lastname: attributes.lastname,
      number: attributes.number,
      email: attributes.email
    });
  })
  .then(() => {
    res.json({
      success: true,
      msg: 'Successful update'
    });
  })
  .catch(err => console.log(err));
});

// create contact
router.post('/', async (req, res) => {
  const attributes = req.body;
  contacts.create({
    name: attributes.name,
    lastname: attributes.lastname,
    number: attributes.number,
    email: attributes.email
  }).then(() => {
    res.json({
      success: true,
      msg: 'Successfully created'
    });
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router;
