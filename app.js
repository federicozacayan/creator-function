import _ from './creator.js'
import Navigator from './Navigator.js'
import List from './List.js'
import cssLoader from './CssLoader.js'

let links = 'Home Products Contac-Us'.split(' ')

let components = [
    new Navigator(new List(links)),
    _('section', [
        _('h1', 'This is a title '),
        _('p', 'lorem'),
    ]),
]


components.map(c => _(document.body, c))

function Foo(){
    return _('div','test')
}

console.log(_(Foo));
console.log(_(Foo()));

let sectionStyle = `section, ul{width: 700px; margin: 0 auto}
section{padding: 0 .25em}
@media (max-width: 700px) { ul{flex-flow: column} }`
cssLoader.set(sectionStyle)
