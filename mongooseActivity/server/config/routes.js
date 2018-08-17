const reptile = require("./../controllers/reptiles");

module.exports = (app) =>{
    app.get("/reptiles", reptile.index)
    app.post('/reptiles', reptile.create)
    app.get('/reptiles/edit/:id', reptile.edit)
    app.put('/reptiles/update/:id', reptile.update)
    app.delete('/reptiles/:id', reptile.delete)
}