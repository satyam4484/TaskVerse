import axiosClient from "./apiClient.js";

export const getWorkSpaces = () => {
    return axiosClient().get('MNOAjjL').then(response => response.data)
}