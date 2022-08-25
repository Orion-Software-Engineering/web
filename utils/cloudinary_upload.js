import {CLOUD_NAME} from "../config/cloudinary_upload";


export const uploadImageToCloudinary = async (file) => {
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`
    let status, image_url

    await fetch(url, {
        method: "POST",
        // mode: 'cors',
        body: file
    }).then(response => {
        console.log(response)
        // status = response.status
        return response.json()
    }).then(data => {
        // console.log(data)
        image_url = data.url
    })

    return image_url
}
