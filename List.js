import _ from './creator.js'
import Props from './Props.js'
class List extends Props {
    render(a) {
        return _('ul', a.map(link => _('li',
                _('a', link, { href: `/${link}` })
            )
        ))
    }
}
export default List