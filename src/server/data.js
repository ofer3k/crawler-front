import Axios from "axios";

const url = "http://localhost:3000/";
// const begin=async()=>{
//     Axios.post(url)
// }

const getNames=async()=>{
    const names=await Axios.get(url)
    return names
}

export function begin(data) {
    return Axios(url, {
        method: 'POST',
        body: JSON.stringify({ hi: 'hello' }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response;
            console.log(response);
            window.location.reload();
          } else {
           console.log('Somthing happened wrong');
          }
    }).catch(err => err);
    }

export default getNames
//  export const getData = async () => {
//     try {
//         const result = await Axios.get(url);
//         return result.data;
//     } catch (err) {
//         console.log(err);
//     }
// };

//  const deleteImage = async (id, key) => {
//     try {
//         await Axios.delete(url + "delete-images", {
//             data: { id, key }
//         });
//         return;
//     } catch (err) {
//         console.log(err);
//     }
// };
