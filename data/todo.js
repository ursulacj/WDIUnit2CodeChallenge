var todos = [
];

module.exports = {
    getAll,
    create,
    deleteOne,
    reset
};

function getAll() {
    return todos;
}

function create(todo) {
    todos.push(todo);
}

function deleteOne(id) {
    todos.splice(id, 1);
}

function reset() {
    todos = [];
    return todos;
}