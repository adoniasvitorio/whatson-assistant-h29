const Organization = require('../models/Organization');

module.exports = {
    async store(request, response) {
        const {
            organization_name,
            email,
            avatar_url,
            address,
            address2,
            district,
            city,
            state,
            country,
            postal_code,
            first_phone,
            second_phone,
            connect_phone,
            specialties
        } = request.body;
        const specialtiesArray = specialties.split(',').map(specialty => specialty.trim());

        let newOrganization = await Organization.findOne({ address });

        if (!newOrganization) {

            const newOrganization = await Organization.create({
                organization_name,
                email,
                avatar_url,
                address,
                address2,
                district,
                city,
                state,
                country,
                postal_code,
                first_phone,
                second_phone,
                connect_phone,
                specialties: specialtiesArray,
            });
        }
        const message = {
            messahe: "congratulations !, Yoour account has ben created !",
            organization_code: "123456",
            url_notifications: "https://whatson-assistant-h29/{organization_code}/notifications",
            url_conversation: "https://whatson-assistant-h29/{organization_code}/notifications",
            status: 200
        }
        return response.json(message);
    }
}