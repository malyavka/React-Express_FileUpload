import React, { Fragment, useState } from 'react';
import Message from './message';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [message, setMessage] = useState('');

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
        if (file.size >= (3000 * 1024)) {
            alert('Sorry, the max allowed size for images is 100KB')
        }
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            setMessage('File Uploaded! Thank you!');
            setTimeout(() => {
                setMessage('');
                setFile('');
                setFilename('');
            }, 3000)
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
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        type='file'
                        onChange={onChange}
                    />
                </div>
                <input
                    type='submit'
                    value='Upload'
                />
            </form>

        </Fragment>
    );
};

export default FileUpload;