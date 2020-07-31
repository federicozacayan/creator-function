import _ from './creator.js'
import C from './C.js'
class List extends C {
    render(links) {
        return _('ul', links.map(link => _('li',
                _('a', link, { href: `/${link}` })
            )
        ))
    }
}
export default List