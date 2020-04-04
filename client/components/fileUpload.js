import React, { Fragment, useState } from 'react';
import Message from './message';
import axios from 'axios';

const FileUpload = () => {
    const [message, setMessage] = useState('');
    const onChange = async e => {

        if (e.target.files[0].size >= (3000 * 1024)) {
            alert('Sorry, the max allowed size for images is 100KB')
        }
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        console.log(formData.get('file'))

        try {
            const res = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            setMessage('File Uploaded! Thank you!');
            setTimeout(() => {
                setMessage('');
            }, 4000)
        } catch (err) {
            if (err.response.status === 500) {
                setMessage('There was a problem with the server');
            } else {
                setMessage(err.response.data.msg);
            }
        }
    };

    return (
        <Fragment>
            {message ? <Message msg={message} /> : null}
                <div>
                    <input
                        type='file'
                        required
                        onChange={onChange}
                        title='sdf'
                    />
                </div>

        </Fragment>
    );
};

export default FileUpload;