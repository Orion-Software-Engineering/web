import React, { useState } from 'react'
import axios from 'axios';
import Image from 'next/image';

const ImageUpload = () => {
    const [file, setFile] = useState()

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleSubmit(event) {
        event.preventDefault()
        const url = 'http://localhost:3000/uploadFile';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
        });

    }

    return (
        <div className="h-[100px] w-[100px] ml-">
            <form>
                <input type="file" />
                {/* <button type="submit">Upload</button> */}
            </form>
        </div>
    )
}

export default ImageUpload