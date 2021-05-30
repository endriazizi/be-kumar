const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    define: {
      //https://sequelize.org/master/manual/model-basics.html
      freezeTableName: true //Enforcing the table name to be equal to the model name
    },
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


//Carico i modelli relativi alla base dati

db.roles = require("../models/role.model.js")(sequelize, Sequelize);

// db.giocatore = require("./giocatore.model.js")(sequelize, Sequelize);
// db.edizione = require("./edizione.model.js")(sequelize, Sequelize);
// db.squadra = require("./squadra.model.js")(sequelize, Sequelize);
// db.statisticaSquadra = require("./statisticaSquadra.model.js")(sequelize, Sequelize);
// db.statisticaGiocatore = require("./statisticaGiocatore.model.js")(sequelize, Sequelize);
// db.partecipazioniGiocatori = require("./partecipazioniGiocatori.model")(sequelize, Sequelize);
// db.partecipazioniSquadre = require("./partecipazioniSquadre.model")(sequelize, Sequelize);

// KUMAR

db.categoria = require("./categoria.model")(sequelize, Sequelize);
db.ordine = require("./ordine.model")(sequelize, Sequelize);
db.prodotto = require("./prodotto.model")(sequelize, Sequelize);
db.fornitore = require("./fornitore.model")(sequelize, Sequelize);
db.fornitura = require("./fornitura.model")(sequelize, Sequelize);
db.users = require("./user.model")(sequelize, Sequelize);
db.dettagliOrdine = require("./dattagliOrdine.model")(sequelize, Sequelize);



// //1:N
// db.categoria.hasMany(db.prodotto);
// db.prodotto.belongsTo(db.categoria);

db.categoria.hasMany(db.prodotto, {as: 'categoria',foreignKey: 'categoriaId'});
db.prodotto.belongsTo(db.categoria, {as: 'categoria',foreignKey: 'categoriaId'});   

//1:N
db.dettagliOrdine.hasMany(db.ordine);
db.ordine.belongsTo(db.dettagliOrdine);

// N:N
db.prodotto.belongsToMany(db.fornitore, {
  through: "fornitura",
  foreignKey: "prodottoId",
  otherKey: "fornitoreId"
});
db.fornitore.belongsToMany(db.prodotto, {
  through: "fornitura",
  foreignKey: "fornitoreId",
  otherKey: "prodottoId"
});


// N:N
db.prodotto.belongsToMany(db.users, {
  through: "ordine",
  foreignKey: "prodottoId",
  otherKey: "userId"
});
db.users.belongsToMany(db.prodotto, {
  through: "ordine",
  foreignKey: "userId",
  otherKey: "prodottoId"
});


// Address.belongsTo(Customer); 
// Will add a customerId attribute to Address to hold the primary key value for Customer.
// db.statistica.belongsTo(db.squadra); 

//1:1
// db.statisticaSquadra.hasOne(db.squadra); 

// db.statisticaGiocatore.hasOne(db.giocatore); 


// users.associate = function (models) {
//   users.hasOne(models.userDetails, { 
//     foreignKey: 'userId', 
//     as: 'userDetails', 
//     onDelete: 'CASCADE' 
//   });
// };

// db.users.belongsToMany(db.giocatore, { through: db.punteggi });
// db.giocatore.belongsToMany(db.users, { through: db.punteggi });

// -----------------------------------------------------------

db.roles.belongsToMany(db.users, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.users.belongsToMany(db.roles, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});


// db.squadra.belongsToMany(db.edizione, {
//   through: "partecipazioni_squadre",
//   foreignKey: "squadraId",
//   otherKey: "edizioneId"
// });
// db.edizione.belongsToMany(db.squadra, {
//   through: "partecipazioni_squadre",
//   foreignKey: "edizioneId",
//   otherKey: "squadraId"
// });


// db.giocatore.belongsToMany(db.edizione, {
//   through: db.partecipazioniGiocatori,
//   foreignKey: "giocatoreId",
//   otherKey: "edizioneId"
// });
// db.edizione.belongsToMany(db.giocatore, {
//   through: db.partecipazioniGiocatori,
//   foreignKey: "edizioneId",
//   otherKey: "giocatoreId"
// });




// //1:N
// db.statisticaGiocatore.hasMany(db.partecipazioniGiocatori);
// db.partecipazioniGiocatori.belongsTo(db.statisticaGiocatore);

// db.squadra.hasMany(db.partecipazioniGiocatori);
// db.partecipazioniGiocatori.belongsTo(db.squadra);

// db.giocatore.hasMany(db.edizione);
// db.edizione.belongsTo(db.giocatore);


// //1:N
// db.statisticaSquadra.hasMany(db.partecipazioniSquadre);
// db.partecipazioniSquadre.belongsTo(db.statisticaSquadra);

// -----------------------------------------------------------

// // N:N un biglietto ha molti user tramite ordine
// db.biglietto.belongsToMany(db.users, {
//   through: db.ordine,
//   foreignKey: "bigliettoId",
//   otherKey: "userId"
// });
// // N:N un user ha molti biglietti tramite ordine
// db.users.belongsToMany(db.biglietto, {
//   through: db.ordine,
//   foreignKey: "userId",
//   otherKey: "bigliettoId"
// });

// -----------------------------------------------------------

// -----------------------------------------------------------

// N:N una partita ha molte squadre tramite punteggio
// db.partita.belongsToMany(db.squadra, {
//   through: db.punteggio,
//   foreignKey: "partitaId",
//   otherKey: "squadraId"
// });
// // N:N una squadre ha molte partite tramite punteggio
// db.squadra.belongsToMany(db.partita, {
//   through: db.ordine,
//   foreignKey: "squadraId",
//   otherKey: "partitaId"
// });



// N:N una partita ha molte squadre tramite punteggio
// db.gara.belongsToMany(db.esercizio, {
//   through: db.punteggio,
//   foreignKey: "garaId",
//   otherKey: "esercizioId"
// });
// // N:N una squadre ha molte partite tramite punteggio
// db.esercizio.belongsToMany(db.gara, {
//   through: db.ordine,
//   foreignKey: "esercizioId",
//   otherKey: "garaId"
// });

// -----------------------------------------------------------

// -----------------------------------------------------------

// // 1:N un partita ha molti biglietti
// db.partita.hasMany(db.biglietto);
//   // , { as: "biglietti" });

// // // N:1 un biglietto ha molte partite
// db.biglietto.belongsTo(db.partita, {as: 'role'})



// db.biglietto.belongsTo(db.partita, {as: 'partita',foreignKey: 'partitaId'});   
// db.partita.hasMany(db.biglietto, {as: 'partita',foreignKey: 'partitaId'});

// -----------------------------------------------------------


//1:N
// db.evento.hasMany(db.gara);
// db.gara.belongsTo(db.evento);

// //1:N
// db.disciplina.hasMany(db.gara);
// db.gara.belongsTo(db.disciplina);


//1:N
// db.squadra.hasMany(db.giocatore);
// db.giocatore.belongsTo(db.squadra);







db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
