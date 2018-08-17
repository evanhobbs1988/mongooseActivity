const mongoose = require("mongoose");
const Reptile = mongoose.model("Reptile");

module.exports = {
    index: (req,res) => {
        Reptile.find({}, (err, allReptiles) => {
            if(err){
                res.json(err);
            }
            else{
                res.json({allReptiles: allReptiles});
            }
        });
    },

    create: (req,res) => {
        Reptile.create(req.body, (err, reptile) => {
            if (err) {
                res.json(err)
            }
            else {
                res.json('Successfully added an reptile!')
            } 
        })
    },

    edit: (req,res) => {
        Reptile.findById(req.params.id, (err, reptile) => {
            if(err) {
                res.json(err);
            }
            else{
                res.json(reptile);
            }
        });
    },

    update: (req,res) => {
        Reptile.update({_id: req.params.id}, req.body, {runValidators: true}, (err) => {
            if(err) {
                res.json(err);
            }
            else{
                res.json('Successfully updated');
            }
        });
    },

    delete: (req, res) => {
        Reptile.findByIdAndRemove(req.params.id, (err) => {
            if (err){
                res.json(err)
            }
            else{
                res.json('Successfully deleted!')
            }
        })
    },
}