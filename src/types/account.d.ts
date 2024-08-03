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
    access_token: string,
    token_type: string,
    expires_in: number,
    expires_at: number,
    refresh_token: string,
    user: {
        id: string,
        aud: string,
        role: string,
        email: string,
        email_confirmed_at: string,
        phone: string,
        confirmed_at: Date,
        last_sign_in_at: Date,
        app_metadata: {
            provider: string,
            providers: [
                string
            ]
        },
        user_metadata: {},
        identities: [
            {
                identity_id: string,
                id: string,
                user_id: string,
                identity_data: {
                    email: string,
                    email_verified: boolean,
                    phone_verified: boolean,
                    sub: string
                },
                provider: string,
                last_sign_in_at: Date,
                created_at: Date,
                updated_at: Date,
                email: string
            }
        ],
        created_at: string,
        updated_at: string,
        is_anonymous: boolean
    }
}

export interface EmailLoginType {
    email: string;
    password: string;
}

export interface AccountVerificationType {
    identityType: string;
    identityValue: string;
}