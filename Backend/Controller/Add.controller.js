let AddedListIds = []

export const AddListIds = (req,res)=>{
    try {
        const {id} = req.body;
            AddedListIds.push(id)
        res.status(200).json(AddedListIds)
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
        console.log("Error in the AddListIds controller",error)
    }
}

export const RemoveListIds = (req,res)=>{
    try {
        const { id } = req.body;
    const index = AddedListIds.indexOf(id);
    if (index !== -1) {
    AddedListIds = AddedListIds.filter((elem) => elem !== AddedListIds[index]);
}
res.status(200).json(AddedListIds);

    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
        console.log("Error in the RemoveListIds Controller",error)
    }
}