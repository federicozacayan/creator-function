import C from './C.js'
let appendChild = (parameters) => {
    if (parameters[1] && parameters[1].nodeType) {
        parameters[0].appendChild(parameters[1])
    }
    return parameters
}

let innerText = (parameters) => {
    if (typeof parameters[1] === 'string') {
        parameters[0].innerText = parameters[1]
    }
    return parameters
}

let setAttribute = (parameters) => {
    if (typeof parameters[2] === 'object') {
        for (const key in parameters[2]) {
            parameters[0].setAttribute(key, parameters[2][key])
        }
    }
    return parameters
}

let getNodeFinale = (parameters) => {
    if (parameters[0].nodeType) {
        return parameters
    }
    throw 'Tag is not string or nodeElement'
}

let createElement = (parameters) => {
    if (typeof parameters[0] === 'string') {
        parameters[0] = document.createElement(parameters[0]);
    }
    return parameters
}

let splitArrayNodes = (parameters) => {
    if (Array.isArray(parameters[1]) && !parameters[1].map(node => {
        return node instanceof Node
    }).includes(false)) {
        parameters[1].map(node => parameters[0].appendChild(node))
    }
    if (Array.isArray(parameters[1]) && !parameters[1].map(node => node instanceof C).includes(false)) {
        parameters[1].map(node => el.appendChild(node.get()))
    }
    return parameters
}

let callback = (parameters) => {
    if (typeof parameters[2] === 'function') {
        parameters[2](parameters[0])
    }
    return parameters
}

let getNodeFromComponent = (parameters) => {
    if (parameters[1] instanceof C) {
        parameters[0].appendChild(parameters[1].get())
    }
    return parameters
}

let runFunction = (parameters) => {
    if (parameters[0] instanceof Function) {
        parameters[0] = parameters[0]()
    }
    return parameters
}

let func = [
    runFunction,
    createElement,
    getNodeFinale,
    appendChild,
    getNodeFromComponent,
    splitArrayNodes,
    innerText,
    setAttribute,
    callback
]

export let creator = function () {
    return func.reduce(
        (val, func) => func(val), 
        [arguments[0],arguments[1],arguments[2]]
    )[0];
};

export default creator