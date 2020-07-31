const mongoose = require('mongoose');

const organizationsSchema = new mongoose.Schema({
    organization_name: String,
    email: String,
    avatar_url: String,
    address: String,
    address2: String,
    district: String,
    city: String,
    state: String,
    country: String,
    postal_code: String,
    first_phone: String,
    second_phone: String,
    connect_phone: String,
    specialties: [String],
});

module.exports = mongoose.model('organizations', organizationsSchema);