const db = require('./data/db-config');

module.exports = {
    getResources,
    addResources,
    getProjects,
    addProjects,
    addTask,
    getTask
};

function getResources() {
    return db('resources')
}

function getProjects() {
    return db('projects')
}

function getTask(id) {
    return db('tasks')
        .where('id', id)
}

function addResources(resource) {
    return db('resources')
}

function addProjects(project) {
    return db('projects')
}

function addTask(task) {
    return db('tasks')
}