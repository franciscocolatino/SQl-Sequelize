const Cap = require("../models/Cap");
const Spaceship = require("../models/Spaceship");
//ManyMany
Cap.belongsToMany(Spaceship, {
    foreingKey: "capId",
    through: "capSpaceship",
    as: "spaceships"
});
Spaceship.belongsToMany(Cap, {
    foreingKey: "spaceshipId",
    through: "capSpaceship",
    as: "caps"

})