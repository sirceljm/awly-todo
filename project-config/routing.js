module.exports = {
    "/": {
        "type": "lambda",
        "localEndpoint": "src/pages/home"
    },
    "/examples": {
        "type": "lambda",
        "localEndpoint": "src/pages/examples"
    },
    "/examples-markojs": {
        "type": "lambda",
        "localEndpoint": "src/pages/examples-markojs"
    },
    "/gql": {
        "type": "lambda",
        "localEndpoint": "src/api/vendor/awly/gql/index.js"
    },
    "/api/auth/example-login": {
        "type": "lambda",
        "localEndpoint": "src/api/vendor/awly/auth/example-login.js"
    },
    "/api/auth/example-logout": {
        "type": "lambda",
        "localEndpoint": "src/api/vendor/awly/auth/example-logout.js"
    }
};
