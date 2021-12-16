//Chamando todas as dependencias
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
//Requerindo o schema do banco de dados
const MovieModel = require("./modules/Movie");
//Usando o express e o cors
app.use(express.json());
app.use(cors());
//Conexição com banco de dados
mongoose.connect("conexão-com-o-banco-de-dados-mongodb",{
    
});
//Cadastrar
app.post("/insert", async (req, res)=>{
    const movieName = req.body.movieName
    const movieReviews = req.body.movieReviews
    const movie = new MovieModel({movieName:movieName, movieReview:movieReviews});
    try{
        await movie.save()
    }catch(err){
        console.log(err)
    }
});
//Ler
app.get("/read", async (req, res)=>{
    MovieModel.find({}, (err, result)=>{
        if(err){
            res.send(err)
        }

        res.send(result)
    })
});
//Atualizar
app.put("/update", async (req, res)=>{
    const newMovieReview = req.body.newMovieReview
    const id = req.body.id
    
    try{
       await MovieModel.findById(id, (err, updateMovieReview)=>{
            updateMovieReview.movieReview = newMovieReview
            updateMovieReview.save();
            res.send("update");
        })
    }catch(err){
        console.log(err)
    }
});
//Deletar
app.delete("/delete/:id", async (req, res)=> {
    const id = req.params.id;
    
    await MovieModel.findByIdAndRemove(id).exec();
    res.send("delete");
    
});
//Conectar servidor a porta 5000
app.listen(5000, ()=>{
    console.log("Servidor na porta 5000");
});