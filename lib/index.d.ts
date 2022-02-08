export declare const toBase64: typeof btoa;
export declare const fromBase64: typeof atob;
export declare const toCaesarCipher: (str?: string, shift?: number) => string;
export declare const toCaesarCipherAll: (str?: string) => Object;
export declare const fromCaesarCipher: (str?: string, shift?: number) => string;
export declare const fromCaesarCipherAll: (str?: string) => Object;
export declare type CountOptions = {
    caseSensitive: boolean;
    pattern: RegExp;
};
export declare type Counter = {
    [index: string]: number;
};
export declare const count: (str?: string, options?: CountOptions | undefined) => Counter;
export declare const isAnagram: (str1?: string, str2?: string) => boolean;
