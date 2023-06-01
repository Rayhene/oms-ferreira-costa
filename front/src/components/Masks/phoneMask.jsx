export const phoneMask = (value) => {
    return value
        .replace(/\D/g, '')
        .replace(/^(\d{3})(\d{5})(\d{4})$/, '($1) $2-$3');
}
export default phoneMask;