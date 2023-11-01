module.exports.controllers = { 
    getControllers: function(req, res) {
       res.send(`Привет Юзер`)
    } ,
    getControllersAndId: function(req, res) {
        console.log(req.params);
        res.send(`Юзер с id:${req.params.id} добавлен`);
    } ,
    postControllers: function(req, res) {
        res.send(`Пока юзер`)
    } ,
    deleteControllersAndId: function(req, res) {
        console.log(req.params);
        res.send(`Юзер с id:${req.params.id} удалён`);
    } 
}

