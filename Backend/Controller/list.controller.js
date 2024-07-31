import ListModel from "../Model/list.model.js"

let AddedListIds = []
export const AddList = async(req,res)=>{
    try {
        const {id} = req.body;
        const MovieId = await ListModel.findOne({id});
        if(MovieId){
           return res.status(400).json({message:"This Movie is already added"})
        }
       const AddedMovie=  await ListModel.create(req.body);
       AddedListIds.push(id)
        res.status(200).json(AddedListIds)
    } catch (error) {
        console.log("Error in the AddList Controller",error);
        res.status(500).json({error:"Internal Server Error"})
    }   
}


export const GetList =async(req,res)=>{
    try {
        const MoviesList = await ListModel.find();
        res.status(200).json(MoviesList);
    } catch (error) {
        console.log("Error in the GetList Controller")
        res.status(500).json({error:"Internal Server error"})
    }
}

export const RemoveMovie = async (req,res)=>{
try {
    const {id} = req.body;
    const index = AddedListIds.indexOf(id);
    if (index !== -1) {
    AddedListIds = AddedListIds.filter((elem) => elem !== AddedListIds[index]);
}
    const DeletedMovie = await ListModel.findOneAndDelete({id});
    res.status(200).json(AddedListIds)  
} catch (error) {
    console.log("Error in the RemoveMovie Controller",error)
    res.status(500).json({error:"Internal Server Error"})
}
}

export const RemoveList = async (req,res)=>{
    try {
        const DeletedList = await ListModel.deleteMany({});
        AddedListIds=[]
        return res.status(200).json(AddedListIds);
    } catch (error) {
        console.log("Error in the Remove List Controller",error);
        res.status(500).json({error:"Internal Server Error"})
    }
}