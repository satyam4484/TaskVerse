import axiosClient from "./apiClient.js";


export const userEndPoint = {
    baseUrl: '/user',

    async getUserProfile(): Promise<any> {
        return axiosClient().get(this.baseUrl).then(response => response.data);

    }
}


export const authDetails = {
    baseUrl: '/auth/google',

    async continueWithGoogle () : Promise<any> {
        return axiosClient().get(`${this.baseUrl}/login`,{ withCredentials: true }).then(response => response.data);
    }
}
