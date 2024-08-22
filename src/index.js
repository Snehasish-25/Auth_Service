const express=require("express");
const {PORT}=require("./config/serverConfig");


const setUpAndStartServer=async()=>{
    const app=express();

    app.listen(PORT,()=>{
        console.log(`Server sarted successfully on port: ${PORT}`);
    })
}
setUpAndStartServer();