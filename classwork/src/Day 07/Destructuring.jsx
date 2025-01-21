import PropTypes from 'prop-types';

const Destructuring = (props) => {

    const { name, email } = props;

    return (
        <div>
            Name = {name} <br /> Email = {email}
        </div>
    )
}

Destructuring.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

export default Destructuring;