import { ApiEnpointUtil } from "~/utils/endpointUtil";
import ApiContext from "./ApiContext";
import { cookieKeyUtil } from "~/utils/cookieKeyUtil";
import { AccountType } from "~/types/account";

const getSignInAccount = (): AccountType | null => {
    try {
        //read from local storage
        let account = localStorage.getItem(cookieKeyUtil.account);
        console.log(account);
        //parse to json
        return account ? JSON.parse(account) as AccountType : null;
    } catch (error) {
        return null;
    }
};

//but function login yang panggil ke api tanpa async
const signIn = (param: {email: string, password: string}) : Promise<AccountType | null> => {
    return new Promise((resolve, reject) => {
        ApiContext.post(
            ApiEnpointUtil.auth(),
            {
                email: param.email,
                password: param.password
            },
        ).then((response) => {
            localStorage.setItem(cookieKeyUtil.token, response.data.access_token);
            localStorage.setItem(cookieKeyUtil.account, JSON.stringify(response.data));
            resolve(response.data.account as AccountType);
        }).catch((error) => {
            reject(error);
        });
    });
};

//logout function yang hapus token dan account dari local storage proses logout
const signOut = () => {
    return new Promise((resolve) => {
        localStorage.removeItem(cookieKeyUtil.token);
        localStorage.removeItem(cookieKeyUtil.account);
        resolve(null);
    });
};





export { getSignInAccount, signIn, signOut };