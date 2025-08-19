import express from "express"
import { Router } from "express"
import { createUser, deleteUser, getOneUser, getUsers, updateUser } from "../controllers/user.controller.js"

const userRoutes =  Router()

userRoutes.post("/sign-up",createUser)
userRoutes.put("/:id",updateUser)
userRoutes.delete("/:id",deleteUser)
userRoutes.get("/:id",getOneUser)
userRoutes.get("/",getUsers)


export default userRoutes