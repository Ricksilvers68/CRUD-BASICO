const express = require('express');
const app = express();
const pets = [];
app.use(express.json());

app.get('/', (req, res) => {
    return res.send({ message: 'Hello World'});
})

app.get("/pets/:id",(req,res)=>{
   const {id} = req.params
   return res.json(pets[id])
})

app.get("/pets",(req,res)=>{
    return res.json(pets)
})


app.post("/pets",(req,res)=>{
    const {name} = req.body
    pets.push(name)
    return res.json(pets)
})
 app.put("/pets/:id",(req,res)=>{
     const {id} = req.params
     const {name} = req.body
     pets [id] = name
     return res.json(pets)
 })
 app.delete("/pets/:id", (req,res)=>{
     const {id} = req.params
     pets.splice(id, 2)
     return res.json({msg:"Você excluiu um pet"})
 })

 app.delete("/pets", (req,res)=>{
    const {id} = req.params
    pets.splice(id, 2)
    return res.json({msg:"Você excluiu todos os pets!"})
})



app.listen(8000, () => console.log('server is running in port 8000...'));