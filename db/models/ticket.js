const mongoose = require('mongoose');

const Ticket = mongoose.model('Ticket',{
    customerId: String,
    technicianId: String,
    reportDate: Date,
    status:String,
    comments:String
    
})

module.exports = Ticket;