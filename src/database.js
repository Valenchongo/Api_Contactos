import mysql from "mysql";

const configMysql ={
    host:process.env.HOST,
    user:process.env.USUARIO,
    password:process.env.password,
    database:process.env.DATABASE,
}

const conect = mysql.createConnection(configMysql);

//funcion para agragar usuarios

const addUser = (tabla, usuario) =>{
    return new Promise ((resolve, reject)=>{
        let sql = `INSERT INTO ${tabla} (id_contactos, nombre_contactos, numero_contactos) VALUES (null,"${usuario.nombre}",${usuario.numero})`; 

        conect.query(sql,(err, result, filled)=>{
            if(err){
                 reject(err)
            }else{
                resolve(result)
            }
        })
    })
      
      
      
}

//funcion para obtener usuarios
const GetAllUsers = (tabla)=>{
    return new Promise((resolve, reject)=>{
        let sql = `SELECT * FROM ${tabla}`
        conect.query(sql,(err, result)=>{
            if (err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

//funcion para buscar por id

const getUserByid= (id, tabla, callback)=>{
    return new Promise((resolve, reject)=>{
        let sql =`SELECT * FROM ${tabla} WHERE id_contactos = ${id}`
        conect.query(sql,(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
   
}


//funcion para updatear usuario

const updateUser = (id,tabla,usuario)=>{
return new Promise((resolve,reject)=>{
   let sql = `UPDATE ${tabla} SET nombre_contactos = "${usuario.nombre}", numero_contactos = ${usuario.numero} WHERE id_contactos =${id}`

   conect.query(sql,(err,result)=>{
    if(err){
        reject(err)
    }else{
        resolve(result)
    }
   })
})
}

//funcion para deletear usuario

const DeleteUserById = (id, tabla)=>{
    return new Promise((resolve,reject)=>{
        let sql = `DELETE FROM ${tabla} WHERE id_contactos = ${id}`
        conect.query(sql,(err, result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
     })
}


export { 
    conect,
    addUser,
    GetAllUsers,
    getUserByid,
    updateUser,
    DeleteUserById
}