const Ticket = require('../../db/models/ticket')

module.exports = {
    async saveTicket(req, res) {
        const ticket = new Ticket({
            customerId: req.body.customerId,
            technicianId: req.body.technicianId,
            reportDate: new Date(),
            model:req.body.model,
            status:req.body.status,
            customerComment:req.body.customerComment,
            technicianComment:req.body.technicianComment,
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
    async updateTicket(req, res) {
        const ticketId = req.params.id;
        Ticket.findOneAndUpdate({_id: ticketId}, 
            {status:req.body.status,technicianComment:req.body.technicianComment},
            function (err, docs) {
                if (err){
                    res.status(500).json({message:err});
                }
                else{
                    res.status(200).json(docs);
                }
                console.log(req.body.technicianComment);
        });
    },
    async deleteTicket(req, res) {
        const ticketId = req.params.id;
        await Ticket.deleteOne({_id: ticketId}).then(function(){
            res.send('usunieto')
        }).catch(function(error){
            res.status(500).json({message:error});
        });;

    },
}