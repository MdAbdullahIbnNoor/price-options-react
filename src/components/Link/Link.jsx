import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <li className='px-2 py-1 md:py-0 rounded-lg text-center font-semibold z-20 hover:bg-amber-600'>
            <a href={route.path}>{route.name}</a>
        </li>
    )
};

Link.PropTypes = {
    route: PropTypes.object
}

export default Link;