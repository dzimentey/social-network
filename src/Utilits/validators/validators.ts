
export const requiredFields = (value: string) => {
    if(value) return undefined;

    return 'Field is required';

}