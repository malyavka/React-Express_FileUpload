import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ msg }) => {
    return (
        <div >
            {msg}
            <button
                type='button'
                className='close'
                data-dismiss='alert'
                aria-label='Close'
                color="red"
            >
            </button>
        </div>
    );
};

Message.propTypes = {
    msg: PropTypes.string.isRequired
};

export default Message;