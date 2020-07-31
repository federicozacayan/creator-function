import C from './C.js'
import _ from "./creator.js"
import cssLoader from './CssLoader.js'

class Navigator extends C {
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