import axiosClient from "./apiClient.js";


export const userEndPoint = {
    baseUrl: '/user',

    async getUserProfile(): Promise<any> {
        return axiosClient().get(this.baseUrl).then(response => response.data);
    },

    async checkUserData(data: any): Promise<any> {
        return axiosClient().post(`${this.baseUrl}/validate`,JSON.stringify(data)).then(response => response.data);
    },

    async createUser(data: any): Promise<any> {
        return axiosClient().post(this.baseUrl,JSON.stringify(data)).then(response => response.data);
    }
    
}


export const authDetailsEndPoint = {
    baseUrl: '/auth/google',

    async continueWithGoogle () : Promise<any> {
        return axiosClient().get(`${this.baseUrl}/login`,{ withCredentials: true }).then(response => response.data);
    }
}
