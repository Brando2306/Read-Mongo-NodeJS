const mongoose = require('mongoose')
const url = 'mongodb://localhost/mongo1_curso'

mongoose.connect(url,{
})
.then(()=>console.log("CONECTADO A MONGO DB"))
.catch((e)=>console.log("El error de conexión es: " + e) )


//Primero creamos el esquema
const personaSchema = mongoose.Schema({
    nombre:String,
    edad:Number,
    pais:String
},{versionKey:false})

//Ahora creamos el modelo
const PersonaModel = mongoose.model('personas',personaSchema)


//---------------------------READ DATABASE-----------------------------

//Mostrar
const mostrar = async ()=>{
    const personas = await PersonaModel.find()
    console.log(personas)
}

const mostrarUno = async ()=>{
    const personas = await PersonaModel.findOne({"edad":23})
    console.log(personas)
}


//Llamar al procedimiento
mostrar()
mostrarUno()