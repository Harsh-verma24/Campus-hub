import mongoose from "mongoose";
import {User} from '../models/user.model.js'
import express from 'express'
export const createUser= async (req,res) =>{
   try {
     const userData =await req.body;
    const user =await User.create(userData)
    res.json(user)
   } catch (error) {
    console.log("createUser error",error)
    res.status(500)
   }
}

export const updateUser= async (req,res) =>{
   try {
    const {id} = req.params;
     const userData =await req.body;
    const user =await User.findByIdAndUpdate(id,userData,{new :true})
    res.json(user)
   } catch (error) {
    console.log("updateUser error",error)
    res.status(500)
   }
}

export const deleteUser= async (req,res) =>{
   try {
    const {id} = await req.params;
    const user =await User.findByIdAndDelete(id)
    res.json(user)
   } catch (error) {
    console.log("deleteUser error",error)
    res.status(500)
   }
}

export const getUsers= async (req,res) =>{
   try {
    const users = await User.find();
    res.json(users)
   } catch (error) {
    console.log("getUsers error",error)
    res.status(500)
   }
}

export const getOneUser= async (req,res) =>{
   try {
    const {id} = req.params;
    const users = await User.findById(id);
    res.json(users)
   } catch (error) {
    console.log("getUsers error",error)
    res.status(500)
   }
}
 
export const loginUser=async(req,res)=>{
   const {email,password} = req.body;
   try {
      const user = await User.findOne({email});
      if(!user) res.json({message:"invalid credentials"});
      const isMatch =user.isPasswordCorrect(password);
      if(!isMatch) res.json({message:"invalid credentials"});
        
      res.status(200).json({
         message:"Login successfully",
         user
      })
   } catch (error) {
      console.log("loginUser error",error)
    res.status(500)
   }
}

