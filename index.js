import express from "express";
import favicon from "serve-favicon";
import cors from "cors";
import dotenv from "dotenv";
import {  addUser, GetAllUsers, getUserByid, updateUser,DeleteUserById } from "./src/database.js";

const puerto = process.env.PORT || 8000;

const app = express();

//midelwares
dotenv.config()
app.use(favicon("public/favicon.jpg"));
app.use(cors());
//


app.listen(puerto,(req,res)=>{
   console.log("funkando")
})


//RUTAS

app.get("/",(req,res)=>{
   
   
})  

     //ruta para añadir user//
app.get("addUser",(req,res)=>{
   let usuario ={
      nombre:"manuel",
      numero:1542312
   }

   addUser("contactos",usuario)
   .then(res =>{
      console.log(res);
   })
   .catch(err =>{
      console.log(err)
   })
})
   
      //ruta para obtener usuarios//

app.get("/getall",(req,res)=>{
  
   GetAllUsers("contactos")
   .then(resu =>{
      console.log(resu) 
      res.send(resu)
                

   })
   .catch(err=>{
      console.log(err)
   })
})


        //ruta para obtener usuarios por id//

app.get("/id/:id",(req,res)=>{
   let {id}= req.params;
   getUserByid(id,"contactos")
   .then(resp =>{
   console.log(resp)
   res.send(resp)
   })
   .catch(err =>{
      console.log(err)
   })

}) 


         //ruta para udpatear usuario//
app.get("/update/:id/:nombre/:numero",(req,res)=>{
  let {id, nombre, numero} =req.params;
  let contacto ={
   nombre,
   numero
  }
  updateUser(id,"contactos",contacto)
  .then(resp=>{
   console.log(resp)
   res.send("mira la consola con lo actualizado")
  })
  .catch(err =>{
   console.log(err)
  })
})

                //ruta para deletear usuario por id//

app.get("/delete/:id",(req,res)=>{
   let {id} = req.params;
   DeleteUserById(id,"contactos")
   .then(resp =>{
      console.log(resp)
      res.send("user eliminado")
   })
   .catch(err =>{
      console.log(err)
   })
})                