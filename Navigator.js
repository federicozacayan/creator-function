import Props from './Props.js'
import _ from "./creator.js"
import cssLoader from './CssLoader.js'

class Navigator extends Props { 
    render(links) {
        cssLoader.load('nav.css')
        return _(
            'nav',
            links,
            nav => nav.classList.add('nav')
        )
    }
}
export default Navigator