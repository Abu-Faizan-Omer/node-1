const http=require("http")
const myserver=http.createServer((req,res)=>{
    console.log("New Request ")
    res.end("welcome  Abu Faizan Omer")
})
myserver.listen(4000,()=>console.log("server started"))