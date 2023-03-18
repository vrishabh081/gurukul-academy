const mongoose = require("mongoose");

    // Date-
    let currentTime = new Date();
    let currentDate = currentTime.getDate();
    let currentMonth = currentTime.getMonth() + 1;
    let currentYear = currentTime.getFullYear();
    let x = (`${currentDate}/${currentMonth}/${currentYear}`)

// schema-
const notificationSchema = mongoose.Schema({
    name : String,
    phone : String,
    email : String,
    address : String,
    about : String,
    date : {
        type : String,
        default : x,
    }
})

// model-
const NotificationModel = mongoose.model("notification", notificationSchema);

// export-
module.exports = NotificationModel;