import express from "express"
import { Router } from "express"
import { createUser, deleteUser, getOneUser, getUsers, loginUser, updateUser } from "../controllers/user.controller.js"

const userRoutes =  Router()

userRoutes.post("/sign-up",createUser);
userRoutes.post("/login",loginUser);
userRoutes.put("/:id",updateUser);
userRoutes.delete("/:id",deleteUser);
userRoutes.get("/:id",getOneUser);
userRoutes.get("/",getUsers);


export default userRoutes