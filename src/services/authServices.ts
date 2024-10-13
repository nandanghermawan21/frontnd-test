import { AxiosResponse } from "axios";
import ApiPublic from "~/context/ApiContext";
import {  AccountType, LoginType } from "~/types/account";
import { cookieKeyUtil } from "~/utils/cookieKeyUtil";

export const login = (account: LoginType): Promise<AccountType> => {
    //create simulation login
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            localStorage.setItem(cookieKeyUtil.account, JSON.stringify({
                fullName: 'John Doe',
                nickName: 'John'
            }));
            resolve({
                fullName: 'John Doe',
                nickName: 'John'
            });
        }, 1000);
    });
};

export const logout = (): Promise<AccountType> => {
    //create simulation logout
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            localStorage.removeItem(cookieKeyUtil.token);
            localStorage.removeItem(cookieKeyUtil.account);
            resolve({
                fullName: '',
                nickName: ''
            });
        }, 1000);
    });
};

export const logedInAccount = (): AccountType => {
    const account = localStorage.getItem(cookieKeyUtil.account);
    if (account) {
        return JSON.parse(account);
    }
    return {
        fullName: '',
        nickName: ''
    };
};