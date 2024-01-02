//API's Function 

const {Record} = require("../models/Record");
const {Species} = require("../models/Species");


// CRUD operations
//HTTP POST- Create - Post the data 
// HTTP GET - Read - Retrieves the data
// HTTP PUT - update - update the data
//HTTP Delete/GET/POST - delete- delete the data

exports.species_create_get = (req, res) => {
    //res.render("species/add");
    res.json({species});
}

exports.species_create_post = (req, res) => {
    console.log(req.body)
    let species= new Species(req.body);


//save species
species.save()
.then((specie) => {
    //res.redirect("/species/index");
    res.json({specie})
})
.catch((err) => {
    console.log(err);
    res.send("Please try again later!!")
})
}

exports.species_index_get= (req,res) =>{
    Species.find()
    .then((species) => {
       // res.render("species/index", {species});
       res.json({species});

    })
    .catch((err) => {
        console.log(err);
    })
}
exports.species_show_get = (req,res) =>{
    console.log(req.query.id);
    Species.findById(req.query.id) //.populate('records')
    .then((species) => {
        // res.render("species/detail", {species})
        res.json({species});
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.species_delete_get = (req,res) =>{
    console.log(req.query.id)
    Species.findByIdAndDelete(req.query.id)
    .then((species) => {
        //res.redirect("/species/index");
        res.json({species})
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.species_edit_get = (req,res) =>{
    Species.findById(req.query.id)
    .then((species) => {
        //res.render("species/edit", {species});
        res.json({species});
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.species_update_post= (req,res) =>{
    console.log(req.body._id)
    Species.findByIdAndUpdate(req.body._id, req.body ,{new:true})
    .then((specie) => {

       //res.redirect("/species/index");
        res.json({specie});
    })
    .catch((err) => {
        console.log(err);
    })
}