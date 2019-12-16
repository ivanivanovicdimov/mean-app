const controller = require('./controller');


module.exports = (app)=>{
    app.get('/api/allfighters', controller.fighters)
    app.get('/api/fighter/:id', controller.view)
    app.post('/api/fighter/new', controller.new)
    app.put('/api/fighter/:id', controller.update)
    app.delete('/api/fighter/:id', controller.destroy)

}