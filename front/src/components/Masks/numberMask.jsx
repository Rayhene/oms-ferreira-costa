export const phoneMask = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{3})(\d{5})(\d{4})$/, '($1) $2-$3');
    return value;
}
export default phoneMask;