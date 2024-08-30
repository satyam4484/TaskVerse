import axios from "axios";

const axiosClient = (options = {}) => {
    if (localStorage.getItem("token")) {
        options = { Authorization: `Bearer ${localStorage.getItem("token")}` };
    }

    return axios.create({
        baseURL: "https://www.jsondataai.com/api/",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...options,
        },
    });
};

export default axiosClient;