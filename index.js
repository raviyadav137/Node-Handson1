const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("Welcome to Home Page,When you write JavaScript code in your text editor, that code cannot perform any task unless you execute (or run) it.");
        res.end();
    }
    else if(req.method=="GET" && req.url==="/api"){
        res.write(JSON.stringify({
            name:"Raavi", Id:"1",Age:"23"
        }))
        res.end();
    }
    else if(req.method=="GET" && req.url==="/arr"){
        res.write(JSON.stringify([1,2,3,4,5]))
        res.end();
    }
})
server.listen(5000,()=>{
    console.log("Server started on port 5000");
})