const express = require('express');
const helmet = require('helmet');
const welcomeRouter = require("./routers/welcome");
const projectRouter = require("./routers/projectsRouter");
const resourceRouter = require("./routers/resourceRouter");

const server = express();
const port = process.env.PORT || 4000;
server.use(helmet());
server.use(express.json());
server.use(welcomeRouter);
server.use('/projects', projectRouter);
server.use('/resources', resourceRouter);

server.use((err, req, res, next) => {
    console.log(err)
    return res.status(500).json({
        errorMessage: "A server error has occurred"
    })
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})