import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosInstance from '@/api/axiosInstance';

export const getRequest = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T> | null> => {
    try {
        const response = await axiosInstance.get<T>(url, config);
        return response;
    } catch (error) {
        console.error(`GET request to ${url} failed:`, error);
        return null;
    }
};