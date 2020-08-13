import _ from './creator.js'
import Props from './Props.js'
class List extends Props {
    render(links) {
        return _('ul', links.map(link => _('li',
                _('a', link, { href: `/${link}` })
            )
        ))
    }
}
export default List