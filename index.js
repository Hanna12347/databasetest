const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { Pool } = require("pg");
const { error } = require("console");
const app =express();
const PORT = 3001;

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"resturant",
    password:"haniya",
    port:5432
});
app.use(bodyParser.urlencoded({extended:true}));
app.set(express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs");
pool.query('SELECT * FROM public.resturants',(err,result)=>{
    if(error){
        console.error("error",error)
    }else{
        const resturants = result.rows;
        console.log(resturants)
    }
})
pool.query('SELECT * FROM public.custumers',(err,result)=>{
    if(error){
        console.error("error",error)
    }else{
        const custumers = result.rows;
        console.log(custumers)
    }
})
pool.query('SELECT * FROM public.orders',(err,result)=>{
    if(error){
        console.error("error",error)
    }else{
        const orders = result.rows;
        console.log(orders)
    }
})
pool.query('SELECT * FROM public.foods',(err,result)=>{
    if(error){
        console.error("error",error)
    }else{
        const foods = result.rows;
        console.log(foods)
    }
})
app.listen(PORT,()=>{
    console.log("server started")
})