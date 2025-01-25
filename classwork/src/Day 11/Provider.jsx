import PropTypes from 'prop-types';
import Context from './Context';

const Provider = (props) => {
    return (
        <Context.Provider value={{ name: "Yash" }}>
            {props.children}
        </Context.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.any
};

export default Provider;