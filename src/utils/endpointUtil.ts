export const ApiEnpointUtil = {
    auth: () => {
        return '/auth/v1/token?grant_type=password';
    },
    getUer: () => {
        return '/rest/v1/rpc/get_user';
    }
};