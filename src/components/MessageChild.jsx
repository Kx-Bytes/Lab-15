import React from 'react';
import PropTypes from 'prop-types';

function MessageChild({ message }) {
    return <p>{message}</p>;
}

MessageChild.propTypes = {
    message: PropTypes.string.isRequired
};

export default MessageChild;
