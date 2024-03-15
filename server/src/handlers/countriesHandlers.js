
// Estar ATENTOS a CAMBIAR los datos del QUERY
const countriesHandler = (req, res)=>{
    const { name, email, otraCosa, masCosas } = req.query;
    if(name) res.status(200).send(`Aquí va el Pais ${name}`);
    res.status(200).send("Aquí van todos los Paises");
};

const countriesDetailHandler = (req, res)=>{
    const {id} = req.params;

    res.status(200).send(`Detalle del Usuario ${id}`);
};

module.exports = {
    countriesHandler,
    countriesDetailHandler
}