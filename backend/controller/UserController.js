const ActorModel = require("../model/UserModel");

//getting an actor 
module.exports.getActor = async (req,res) => {
    try {
        console.log(req);
        const actor = await ActorModel.find();
        console.log("Actors fetched ",actor);
        res.status(200).json(actor);
    }
        catch(error){
            res.status(500).json({error  : error.message })

        }

    };



//adding the actor


module.exports.saveActor = async(req,res) => {
    const {name, profession ,age, nationality, awards} = req.body;
    try {
        const actor = new ActorModel({ name, profession, age, nationality, awards });
        await actor.save();
        console.log(actor);
        res.status(201).json({message : "Actor added successfully" ,actor});
        
    } catch (error) {
        res.status(400).json({ error  : error.message })    

    }       
}

//getting the actor by id 

module.exports.getActorById = async(req,res) => {
    const {id} = req.params;
    try {
        const actor = await ActorModel.findById(id);
        if (!actor) return res.status(404).json({ message : "Actor not found" });
        res.status(200).json(actor);
    }
    catch(error) {
        res.status(500).json({ error  : error.message })

    }
};


//update the actor  by id 

module.exports.updateActor = async(req,res) => {
    const {id} = req.params;
    const {name,profession,age,nationality,awards} = req.body;
    try {
        const actor = await ActorModel.findByIdAndUpdate(id, {name,profession,age,nationality,awards}, {new: true, runValidators : true });
        if(!actor) return res.status(404).json({message :"Actor not found"});
        res.status(200).json({message:"Actor updated successfully" ,actor});
    }
    catch(error){
        res.status(500).json({ error  : error.message })
    }
};

// deleting the actor by id 

module.exports.deleteActor = async(req,res) => {
    const {id} = req.params;
    try {
        const actor = await ActorModel.findByIdAndDelete(id);
        if(!actor) return res.status(404).json({message :"Actor not found"});
        res.status(200).json({message:"Actor deleted successfully"});
    }
    catch(error){
        res.status(500).json({ error  : error.message })
    }
};

        

    








