const NotificationModel = require("../model/contactUs");


  // get all notificcations-
  const getAllNotifications = async(req, res)=>{
    try
    {
        const allNotifications = await NotificationModel.find();
        console.log("All Notifications");
        res.json(allNotifications);
    }
    catch(error)
    {
        console.log(error);
        res.json({error: "OOP's somthing went wrong"})
    }
  }


  // post notification-
  const postNotification = (req, res) =>{
    const {phone, email} = req.body;

    // varification with regex code-
    const emailVarify = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const phoneVarify = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/.test(phone);

    if(!emailVarify){
        return res.status(422).json({ error: "Please fill valid email address" });
    }
    if(!phoneVarify){
        return res.status(422).json({ error: "Please fill valid mobile number" });
    }

    const payload = req.body;

    const data = new NotificationModel(payload);
    data.save();
    return res.json({message: "Your details have been sent to SR Gurukul Academy"});
  }


  // delete notification-
  const deleteNotification = async(req, res)=>{
    const {_id} = req.params;
    try
    {
        await NotificationModel.findByIdAndDelete({_id})
        console.log("Successfully deleted");
        res.json({message: "Successfully deleted"})
    }
    catch(error)
    {
        console.log(error);
        res.json({error: "OOP's data not deleted"})
    }
  }

  module.exports = { getAllNotifications, postNotification, deleteNotification }