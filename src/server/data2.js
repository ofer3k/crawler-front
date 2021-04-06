import Axios from "axios";

const url = "http://localhost:3000/";


 const getImages=async()=>{
    const images=await Axios.get(url+'images')
    return images
}


export default getImages
