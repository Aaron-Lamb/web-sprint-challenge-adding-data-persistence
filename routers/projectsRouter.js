const express = require("express");
const db = require("../models/projectModel");
const { validateProject, validateProjectId, validateTask } = require("../middleware/projectMiddleware");
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        const projects = await db.getProjects();
        return res.status(200).json(projects);
    } catch (error){
        next(error)
    }
})

router.get('/:id', validateProjectId(), (req, res, next) => {
    try{
        return res.status(200).json(req.project);
    } catch(error){
        next(error)
    }
})

router.post('/', validateProject(), async (req, res, next) => {
    try{
        await db.addProject(req.body);
        return res.status(201).json(req.body);
    } catch(error){
        next(error)
    }
})

router.get('/:id/tasks', validateProjectId(), async (req, res, next) => {
    try{
        const tasks = await db.getProjectTasks(req.params.id);
        return res.status(200).json(tasks);
    } catch(error) {
        next(error)
    }
})

router.post('/:id/tasks', validateTask(), validateProjectId(), async (req, res, next) => {
    try{
        await db.addTask(req.body)
        return res.status(201).json(req.body);
    } catch(error) {
        next(error)
    }
})

module.exports = router;