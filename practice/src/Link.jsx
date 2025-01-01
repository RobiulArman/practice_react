import PropTypes from "prop-types"; // Import PropTypes for type checking

const Link = ({ route }) => {
    return (
        <li className="mr-10 px-5 hover:bg-green-400">
            <a
                href={route.path}>{route.name}</a>
        </li>
    );
};

// Define PropTypes for the component
Link.propTypes = {
    route: PropTypes.shape({
        path: PropTypes.string.isRequired, // path must be a string and is required
        name: PropTypes.string.isRequired, // name must be a string and is required
    }).isRequired, // route is a required object
};

export default Link;

