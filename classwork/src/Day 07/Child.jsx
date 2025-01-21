import PropTypes from "prop-types";

const Child = ({ title }) => {
    return (
        <div>
            Hey I am child. Parent&apos;s message = {title}
        </div>
    )
}

Child.propTypes = {
    title: PropTypes.string.isRequired
}

export default Child;