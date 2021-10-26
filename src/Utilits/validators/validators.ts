
export const requiredField = (value: string) => {
    if(value) return undefined;

    return 'Field is required';

}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if(value && value.length > maxLength) return `Max length should be fewer or equal ${maxLength} characters `;

    return undefined ;
}

// export const maxLength30 = (value: string) => {
//     if(value && value.length > 30) return 'Max length should be fewer or equal 30 characters ';
//
//     return undefined ;
// }