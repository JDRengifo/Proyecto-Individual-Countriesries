const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Country", {
      iso3:{
        type: DataTypes.STRING(3), // Define el tipo de dato como un string de tres letras
        primaryKey: true, 
      },
    
      nombre:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    
      bandera:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
    
      continente:{
        type: DataTypes.STRING,
        allowNull: false
      },
    
      capital:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    
      subregión:{
        type: DataTypes.STRING,
      },
    
      area:{
        type: DataTypes.INTEGER
      },
    
      población:{
        type: DataTypes.INTEGER
      }, 
    })
  }, {
    noPrimaryKey: true, //! Buscar donde va esto
  }
  

// name: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },