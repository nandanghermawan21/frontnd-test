const validateWaPhone = (rule: any, value: any, callback: any, t: Function) => {
    const phoneRegex = /^[0-9]{10,13}$/;
    if (!value) {
        return callback(new Error(t('Harap isi no watsapp')));
    }
    if (!phoneRegex.test(value)) {
        return callback(new Error(t('format no watsapp tidak valid')));
    }
    return callback();
};

//VALIDASI EMAIL
const validateEmail = (rule: any, value: any, callback: any, t: Function) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!value) {
        return callback(new Error(t('Harap isi email')));
    }
    if (!emailRegex.test(value)) {
        return callback(new Error(t('invalid email format')));
    }
    return callback();
};

export { validateWaPhone, validateEmail };