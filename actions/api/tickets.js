const Ticket = require('../../db/models/ticket')

module.exports = {
    async saveTicket(req, res) {
        const ticket = new Ticket({
            customerId: req.body.customerId,
            technicianId: req.body.technicianId,
            reportDate: new Date(),
            status:req.body.status,
            comments:req.body.comments,
        })

        await ticket.save();

        res.status(200).json(ticket);
    },
    async getTicket(req, res) {
        const ticketId = req.params.id;
        const doc = await Ticket.findOne({_id: ticketId});

        res.status(200).json(doc);
    },
    async getTickets(req, res) {
        let doc = await Ticket.find({});
        res.status(200).json(doc);
    },
    updateTicket(req, res) {
        const ticketId = req.params.id;

        res.send(ticketId)
    },
    deleteTicket(req, res) {
        const ticketId = req.params.id;

        res.send('dupa123')
    },
}