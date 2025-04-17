const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("user Test route");
});

router.get("/test2", (req, res) => {
  res.send("user Test2 route");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post(
  "/register",
  body("email").trim().isEmail().isLength({ min: 13 }),
  body("password").trim().isLength({ min: 5 }),
  body("username").trim().isLength({ min: 3 }),
  (req, res) => {
    const errors = validationResult(req);
    console.log("errors bhai", errors);
    if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array(), message: 'Invalid data'}); 
    }
    console.log("here is the data in requesrt", req.body);
    res.send("User registered");
  }
);

module.exports = router;
