var Todo = require('../data/todo');

module.exports = {
    index,
    create,
    delete: deleteTodo
}

function index(req, res) {
    res.render('index', {
        todos: Todo.getAll(),
    });
}

function create(req, res) {
    console.log(req.body);
    req.body.done = false;
    Todo.create(req.body);
    res.redirect('/');
}

function deleteTodo(req, res) {

}
