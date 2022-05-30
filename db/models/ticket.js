const mongoose = require('mongoose');

const Ticket = mongoose.model('Ticket',{
    customerId: String,
    technicianId: String,
    reportDate: Date,
    model:String,
    status:String,
    customerComment:String,
    technicianComment:String
})

module.exports = Ticket;