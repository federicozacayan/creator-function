import _ from './creator.js'
import Navigator from './Navigator.js'
import List from './List.js'

let links = 'Home Products Contac-Us'.split(' ')

let components = [
    new Navigator(new List(links)),
    // _('nav',_('ul', links.map(link=>_('li',_('a', link, {href:'#'}))))),
    _('section', [
        _('h1', 'This is a title '),
        _('p', 'lorem'),
    ]),
]


components.map(c => _(document.body, c))

function App() {
    return _('div','content')
}

let run = (param) => {
    if (param instanceof Function) {
        return param()
    }
    return param
}
console.log(run(App))
