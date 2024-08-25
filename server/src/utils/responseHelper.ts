import { Response } from "express";

interface CustomResponse {
    success: boolean;
    message: string;
    data?: any;
    error?: any;
}

export const sendResponse : any = (res: Response, statusCode: number, message: string, data: any = null, error: any = null): Response<any,Record<string,any>> => {
    const response: CustomResponse = {
        success: statusCode >= 200 && statusCode < 300,
        message,
        data: data ,
        error: String(error)
    };

    return res.status(statusCode).json(response);
};