const express = require("express");
const { getAllNotifications, postNotification, deleteNotification } = require("../controller/home");
const homeRoutes = express.Router();

// routes-
homeRoutes.get("/get-notification", getAllNotifications)
homeRoutes.post("/post-notification", postNotification)
homeRoutes.delete("/delete-notification/:_id", deleteNotification)

module.exports = homeRoutes;