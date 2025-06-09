import PropTypes from 'prop-types'
import React from 'react'

const Link = ({route}) => {
    return (
        <li className='mr-10 hover:bg-yellow-400 px-6 pt-3'><a href={route?.path}>{route?.name}</a></li>
    )
}
Link.proptypes = {
    route: PropTypes.object
}
export default Link
