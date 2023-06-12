const Cap = require("../models/Cap");

module.exports = {
    // MÉTODO STORE POST
    async store(req, res) {
        const {name, registerNumber} = req.body;
        const cap = await Cap.create({ name, registerNumber});
        return res.json(cap);
    },
    // MÉTODO INDEX GET
    async index(req, res) {
        const cap = await Cap.findAll();
        return res.json(cap);
    }
}