import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
    data: {
        message: string;
        stack: string;
        success: boolean;
    };
    status: number;
};


export type TUser = {
    _id: string,
    name: string,
    role: string,
    email: string,
}

export type TResponse<T> = {
    data?: T;
    error?: TError;
    success: boolean;
    message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;