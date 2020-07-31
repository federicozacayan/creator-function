import C from './C.js'
let appendChild = (el, inner) => {
    if (inner && inner.nodeType) {
        el.appendChild(inner)
    }
    return el
}

let innerText = (el, inner) =>{
    if (typeof inner === 'string') {
        el.innerText = inner
    }
    return el
}

let setAttribute = (el, params) => {
    if (typeof params === 'object') {
        for (const key in params) {
            el.setAttribute(key, params[key])
        }
    }
}

let getNode = (tag) =>{
    if (tag.nodeType) {
        return tag
    }
    throw 'Tag is not string or nodeElement'
}

let converter = (tag) =>{
    if (typeof tag === 'string') {
        return document.createElement(tag);
    }
    return getNode(tag)
}

let splitNodes = (el, array) =>{
    if(Array.isArray(array) && !array.map(node=>{
        return node instanceof Node
    }).includes(false)){
        array.map(node => el.appendChild(node))
    }
    if(Array.isArray(array) && !array.map(node=>node instanceof C).includes(false)){
        array.map(node => el.appendChild(node.get()))
    }
    return el
}

let callback = (el, params) =>{
    if(typeof params === 'function'){
        params(el)
    }
}

let getNodeComponent = (el, inner) =>{
    if(inner instanceof C){
        el.appendChild(inner.get())
    }
    return el
}

export let creator = function (tag, inner, params) {
    let el = innerText(splitNodes(getNodeComponent(appendChild(converter(tag), inner), inner), inner), inner)
    setAttribute(el, params)
    callback(el, params)
    return el;
};

export default creator