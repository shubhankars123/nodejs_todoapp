import express from "express";
import { getAllUsers, getMyProfile, register, login, logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router()

router.get("/all", getAllUsers)

router.post("/new", register)
router.post("/login", login)

router.get("/logout", logout)


// ye dynamic route hai, koshish krna ki isko last me rkhna hai
// router.get("/userid/:userID", getUsersDetails)

// router.put("/userid/:userID", updateUser)

// router.delete("/userid/:userID", deleteUser)

// common route hai to ye method try karo
router.get("/me", isAuthenticated, getMyProfile)



export default router;