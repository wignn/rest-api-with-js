import {web}  from "./app/web.js";

web.listen(4000, ()=>{
    console.log(`server in http://localhost:4000/`)
})

export default web