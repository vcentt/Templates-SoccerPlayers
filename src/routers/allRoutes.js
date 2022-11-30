const express = require("express");
const router = express.Router();
const playerRosterSchema = require("../playersRoster/firstroster");


router.get("/:equipement", (req,res) => {
    const { equipement } = req.params

    playerRosterSchema.find({ equipement })
    .then((data)=> res.json(data))
    .catch(() => res.json("Haven't players"))
})

router.get("/:equipement/:number", (req,res) =>{
    const {number} = req.params;
    const { equipement} = req.params;
    if(!number)
    {
        return res.json({
            code: 400,
            error: "Player Number is requerid"
        })
    }
    playerRosterSchema.find({number , equipement})
    .then((data)=> res.json(data))
    .catch(() => res.json("Player Number not found"))
})

router.post("/create", (req,res) => {
    const player = playerRosterSchema(req.body);
    player.save()
    .then((data)=> res.json(data))
    .catch((error) => res.json({message:error}))
})

router.put("/:number/edit", (req,res) => {
    const { number } = req.params;
    const { name, age, birth, height, equipement, position } = req.body;

    playerRosterSchema
    .updateOne({number}, { $set: { name, age, birth, height, equipement, position } })
    .then((data)=> res.json(data))
    .catch((error) => res.json({message:error}))
})

router.delete("/remove/:number", (req,res) => {
    const { number } = req.params;

    playerRosterSchema
    .deleteOne({number})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})



module.exports = router;