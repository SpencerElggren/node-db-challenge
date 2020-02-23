const express = require('express');

const Project = require('./project_model');

const router = express.Router();

router.get('/resources', (req,res) => {
    Project.getResources().then(r => res.json(r))
});

router.get('/projects', (req,res) => {
    Project.getProjects().then(r => res.json(r))
});

router.get('/projects/:id/tasks', (req,res) => {
    const id = req.params.id;
    Project.getTask(id).then(r => res.json(r))
});

router.post('/resources', (req,res) => {
    const resource = req.body;
    Project.addResources(resource).then(r => res.json(r))
});

router.post('/projects', (req,res) => {
    const project = req.body;
    Project.addProjects(project).then(r => res.json(r))
});

router.post('/task', (req,res) => {
    const task = req.body;
    Project.getTask(task).then(r => res.json(r))
});

module.exports = router;
