var db = require('../lib/db');

module.exports = {
    getLyrics: getLyrics,
    getLyricById: getLyricById
};


function getLyrics(req, res) {
    var data = db.getData();

    //check if we filter by person
    if(req.swagger.params.person.value) {
        data = data.filter(function(element){
            return element.person.toLowerCase() === req.swagger.params.person.value.toLowerCase();
        });
    }
    
    res.json(data);
}


function getLyricById(req, res) {
    var data = db.getData();

    console.log('id: ' + req.swagger.params.id.value);

    var found = data.find(function(element){
        return element.id == req.swagger.params.id.value;
    });

    if(found){
        res.json(found);
    } else {
        throw Error("Didn't find it!");
        //Or... res.status(404).send({"message": "nope, not found"});
    }
}