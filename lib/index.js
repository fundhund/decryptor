"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAnagram = exports.count = exports.fromCaesarCipherAll = exports.fromCaesarCipher = exports.toCaesarCipherAll = exports.toCaesarCipher = exports.fromBase64 = exports.toBase64 = void 0;
exports.toBase64 = btoa;
exports.fromBase64 = atob;
const toCaesarCipher = (str = '', shift = 0) => {
    if (shift === 0)
        return str;
    if (shift < 0)
        return (0, exports.toCaesarCipher)(str, shift + Math.ceil(-shift / 26) * 26);
    return str
        .split('')
        .map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90)
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        if (code >= 97 && code <= 122)
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        return char;
    })
        .join('');
};
exports.toCaesarCipher = toCaesarCipher;
const toCaesarCipherAll = (str = '') => {
    if (!str)
        return {};
    return Object.assign({}, Array.from({ length: 26 }, (_, i) => (0, exports.toCaesarCipher)(str, i)));
};
exports.toCaesarCipherAll = toCaesarCipherAll;
const fromCaesarCipher = (str = '', shift = 0) => (0, exports.toCaesarCipher)(str, -shift);
exports.fromCaesarCipher = fromCaesarCipher;
const fromCaesarCipherAll = (str = '') => (Object.assign({}, Array.from({ length: 26 }, (_, i) => (0, exports.toCaesarCipher)(str, i))));
exports.fromCaesarCipherAll = fromCaesarCipherAll;
const count = (str = '', options) => {
    const defaultOptions = {
        caseSensitive: false,
        pattern: /\p{Letter}/u,
    };
    const { caseSensitive, pattern } = Object.assign(Object.assign({}, defaultOptions), options);
    const counter = {};
    str.split('').forEach(char => {
        if (char.match(pattern)) {
            const key = caseSensitive ? char : char.toLowerCase();
            counter[key] = key in counter ? counter[key] + 1 : 1;
        }
    });
    return counter;
};
exports.count = count;
const isAnagram = (str1 = '', str2 = '') => {
    const counter1 = (0, exports.count)(str1);
    const counter2 = (0, exports.count)(str2);
    for (const key in counter1) {
        if (!(counter1[key] === counter2[key])) {
            return false;
        }
    }
    return true;
};
exports.isAnagram = isAnagram;
