const Fighter = require('./models');

module.exports ={
    fighters: (req,res)=>{
        Fighter.find().sort( { type: -1 } )
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    view: (req,res)=>{
        Fighter.findById(req.params.id)
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    new: (req,res)=>{
        Fighter.create(req.body)
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    update: (req,res)=>{
        Fighter.findByIdAndUpdate(req.params.id, req.body, {runValidators:true})
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    destroy: (req,res)=>{
        Fighter.findByIdAndDelete(req.params.id)
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },

}