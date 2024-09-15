import Mail from"../models/mailmodel.js"
export const enterthemail= async(req, res) => {
    const newMail= new Mail({
        Email : req.body.Email
    })

    try {
        const mail=await newMail.save();
        return res.status(201).json(mail);
        
    } catch (error) {
        return res.status(400).json({message:error.message});
        
    }

}
export const getlistmail=async (req,res) =>{
    try {
         const Emails= await Mail.find()
         res.json(Emails)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
export const deletemail=async(req,res) =>{
    let mailid=req.params.mail;
    try {
        await Mail.deleteOne({Email:mailid})
        res.json({message:"mail deleted"})
    } catch (error) {
        res.status(500).json({message:error.message});
    }
    
};