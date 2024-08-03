const getSignInAccount = () => {
    //read from local storage
    let account = localStorage.getItem(import.meta.env.VITE_APP_KEY + '_account');
    //parse to json
    return account ? JSON.parse(account) : null;
};

export { getSignInAccount };