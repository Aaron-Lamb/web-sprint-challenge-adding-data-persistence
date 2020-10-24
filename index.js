const express = require('express');
const helmet = require('helmet');

const server = express();
const port = process.env.PORT || 4000;
server.use(helmet());
server.use(express.json());

server.use((req, res, next, err) => {
    console.log(err);
    return res.status(500).json({
        errorMessage: "A server error has occurred"
    })
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})