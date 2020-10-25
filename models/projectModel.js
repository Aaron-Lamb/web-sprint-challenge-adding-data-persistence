const db = require('../data/config');

function getProjects() {
    return db("projects");
}

function getProjectId(id) {
    return db("projects").where('id', id).first();
}

function getProjectTasks(projectId) {
    return db("tasks as t")
        .innerJoin("projects as p", "t.project_id", "p.id")
        .where('project_id', projectId)
        .select([
            "t.id",
            "t.description",
            "t.notes",
            "t.completed",
            "p.name as projectName",
            "p.description as projectDescription"
        ]);
}

function addProject(project) {
    return db("projects").insert(project);
}

function addTask(task) {
    return db("tasks").insert(task);
}

module.exports = {
    getProjects,
    getProjectId,
    getProjectTasks,
    addProject,
    addTask
}