import axios, { Axios } from "axios";
import Mail from "../models/mailmodel.js";
import sendWeatherEmail from "../weatherf/weatherfetch.js";
let location = "";
export const setLocation = (req) => {
    return req.body.address; // Set the location from request body
};
export const setEmail = (req) => {
    return req.body.Email;  // Set the email from request body
  };
export const enterthemail = async (req, res) => {
  setLocation(req);
  setEmail(req);
  const newMail = new Mail({
    Email: req.body.Email,
    address: req.body.address,
  });

  try {
    const mail = await newMail.save();
    await sendWeatherEmail(req,res);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export const getlistmail = async (req, res) => {
  try {
    const Emails = await Mail.find();
    res.json(Emails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deletemail = async (req, res) => {
  let mailid = req.params.mail;
  try {
    await Mail.deleteOne({ Email: mailid });
    res.json({ message: "mail deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
