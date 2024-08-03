//@ts-ignore
import * as CryptoJS from 'crypto-js';

function base64url(input: any) {
    const base64String = btoa(input);
    return urlConvertBase64(base64String);
}

function urlConvertBase64(input: any) {
    var output = input.replace(/=+$/, '');
    output = output.replace(/\+/g, '-');
    output = output.replace(/\//g, '_');

    return output;
}

function randomJti() {
    var newJti = "";
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 12; i++) {
        newJti += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return newJti;
}

function generateJWT(body: any, secret: any) {
    const header = {
        "alg": "HS256",
        "typ": "JWT"
    };
    var token = [];
    token[0] = base64url(JSON.stringify(header));
    token[1] = base64url(JSON.stringify(body));
    token[2] = genTokenSign(token, secret);

    return token.join(".");
}

function genTokenSign(token: any, secret: any) {
    if (token.length != 2) {
        return;
    }
    var hash = CryptoJS.HmacSHA256(token.join("."), secret);
    var base64Hash = CryptoJS.enc.Base64.stringify(hash);
    return urlConvertBase64(base64Hash);
}

function generateJWTV2(secret: any, payload: any) {
    const header = {
        alg: 'HS256',
        typ: 'JWT'
    };
    var token = [];
    token[0] = base64url(JSON.stringify(header));
    token[1] = base64url(
        JSON.stringify(payload)
    );
    token[2] = genTokenSign(token, secret);

    return token.join('.');
}