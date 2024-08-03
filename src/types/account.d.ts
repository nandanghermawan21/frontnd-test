export interface RegisterAccountType {
    fullName: string;
    nickName: string;
    waNo: string;
    email: string;
    profession: string;
    position: string;
    preferedStore: string;
    password: string;
    confirmPassword: string;
    imNotRobot: boolean;
}

export interface ProfessionType {
    id: string;
    value: string;
    name: string;
}

export interface WhatsappLoginType {
    whatsappNumber: string;
    password: string;
}

export interface WhatsappForgotPasswordType {
    whatsappNumber: string;
}

export interface NewtPasswordType {
    password: string;
    confirmPassword: string;
}

export interface AccountType {
    accountID: number,
    fullName: string,
    nickName: string,
    whatsappNumber: string,
    idCardNumber: number, // 83562297649823642760,
    email: string, // "john.doe@example.com",
    professionID: number, // 1,
    professionName: string, // "Wiraswasta",
    posissionID: number, // 1,
    possionName: string, // "Mekanik",
    company: string, // "PT. Lundin Indutry Invest",
    shopID: number, // 1,
    shopName: string, // "JPT Denpasar",
    sendPromoToWA: boolean, // true,
    sendPromoToEmail: boolean, // true,
    userAddress: string, // "Jalan Gadung no 77, Denpasar Utara",
    userAddressLatitude: number, // -8.6392345,
    userAddressLongitude: number, // 115.2005208,
    dob: Date,
    oldPassword?: string,
    newPassword?: string,
    newPasswordConfirmation?: string,
    //for ui purpose
    changePassword?: boolean,
}

export interface EmailLoginType {
    email: string;
    password: string;
}

export interface AccountVerificationType {
    identityType: string;
    identityValue: string;
}