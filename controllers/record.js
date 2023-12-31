//API's Function 

const {Record} = require("../models/Record");
const {Species} = require("../models/Species");


// CRUD operations
//HTTP POST- Create - Post the data 
// HTTP GET - Read - Retrieves the data
// HTTP PUT - update - update the data
//HTTP Delete/GET/POST - delete- delete the data


//Create the Operations 
exports.record_create_get = (req,res) =>{
    Species.find()
    .then((species)=>{
        //res.render("article/add", {authors});
        res.json({species});
    })
    .catch((err)=>{
        console.log(err);
    })
   
}

// exports.record_create_post = (req, res) => {
//     console.log(req.body);
//     let record = new Record(req.body);

//     // Save record
//     record.save()
//     .then((records)=>{
//         req.body.species.forEach(specie  => {
//             Species.findById(specie)
//             .then((oneSpecies)=>{
//                 oneSpecies.records.push(record);
//                 oneSpecies.save();
//             })
//             .catch(err =>{
//                 console.log(err)
//             })
            
//         });
//         //res.redirect("/record/index");
//         res.json({records})

//     })
//     .catch((err)=>{
//         console.log(err);
//         res.send("Please try again later !!")
//     })
// }


exports.record_create_post = (req, res) => {
    console.log(req.body);
    let record = new Record(req.body);

    // Save record
    record
        .save()
        .then((savedRecord) => {
            if (req.body.species && Array.isArray(req.body.species)) {
                req.body.species.forEach((specie) => {
                    Species.findById(specie)
                        .then((oneSpecies) => {
                            if (oneSpecies) {
                                oneSpecies.records.push(savedRecord);
                                oneSpecies.save().catch((err) => {
                                    console.log(err);
                                });
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                });
            }

            res.json({ record: savedRecord });
        })
        .catch((err) => {
            console.log(err);
            res.send("Please try again later!");
        });
};


exports.record_index_get = (req,res) => {
Record.find().populate('species','name')
.then((records)=> {
    //res.render("record/index",{records});
    res.json({records});
})
.catch((err)=> {
    console.log(err);
    res.render('record/index',{records: []});
});
}

exports.record_show_get = (req,res) =>{
console.log(req.query.id);
Record.findById(req.query.id).populate('species')
.then((record) => {
    //res.render("record/detail", {record})
    res.json({record})
})
.catch((err) => {
    console.log(err);
})
}


exports.record_update_post= (req, res) => {
console.log(req.body.id);
Record.findByIdAndUpdate(req.body.id, req.body , {new:true})
.then((records) => {
//res.redirect("/record/index");
res.json({records});
})
.catch((err) => {
console.log("Error is Cannot Updating " + err);
})
};

exports.record_edit_get = (req,res) =>{
Record.findById(req.query.id).populate("species")
.then((record)=>{
    
//res.render('record/edit',{record});
res.json({record});
})
.catch((err) => {
    console.log(err);
   //res.redirect("/record/index");
   
});
};


exports.record_delete_get = (req, res) => {
console.log(req.query.id);
Record.findByIdAndDelete(req.query.id)
.then((record) => {
    //res.redirect("/record/index");
    res.json({record})
})
.catch((err) => {
    console.log(err);
    res.send("Please try again later!!");
})
}