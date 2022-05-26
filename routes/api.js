const express = require('express');
const router = express.Router();
const ticketActions = require('../actions/api/tickets');

router.get('/tickets', ticketActions.getTickets);
router.get('/ticket/:id', ticketActions.getTicket);
router.post('/ticket', ticketActions.saveTicket);
router.put('/ticket/:id', ticketActions.updateTicket);
router.delete('/ticket', ticketActions.deleteTicket);

module.exports = router;