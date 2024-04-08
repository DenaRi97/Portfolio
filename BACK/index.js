import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config()

const app = express();
app.use(express.json());

//RUTAS DE USO
// app.use(cors());
// app.use('/', );

//Puerto y DB
//DB cuando tenga
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});


export default app;