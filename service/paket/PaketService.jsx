import axios from "axios";
import { BaseUrl } from "../url"
import { getToken } from "../logged/logged";

const url = BaseUrl().apiUrl;
const token = getToken()

const getPaket = async () => {
    const response = await axios.get(url + "/paket", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log("Response from getPaket:", response); // Log the response data
    return response.data;
}


const storePaket = async (paket) => {
    console.log("Response from:", paket);
    const response = await axios.post(url + "/paket_add", paket, {
        
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log(paket);
    return response.data;
}

const updatePaket = async (id, paket) => {
    const response = await axios.put(url + "/paket/" + id, paket, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

const deletePaket = async (id) => {
    const response = await axios.delete(url + "/paket/" + id, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    
    });
    return response.data;
}

export { getPaket, storePaket, updatePaket, deletePaket };