export const isNumber = (element) => {
    const patron = /^\d+$/;
    return (patron.test(element)) ? true : false 
} 