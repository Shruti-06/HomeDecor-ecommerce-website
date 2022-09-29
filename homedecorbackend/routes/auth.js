var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { signup,signin,getAlluser,getUserById,getUser,removeUser,updateUser } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 3 char").isLength({ min: 3 })
  ],
  signup    // register
);

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 })
  ],
  signin     //login
);

//router.get("/signout", signout);

router.get("/users",getAlluser);

router.param("userId", getUserById);
router.get("/user/:userId", getUser);

router.delete("/user/:userId",removeUser);
router.put("/user/:userId", updateUser);


module.exports = router;