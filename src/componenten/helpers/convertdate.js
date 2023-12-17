
export const formatDate = (created) => {
    const longOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const formattedDate = new Date(created).toLocaleString('nl-NL', longOptions)
    return formattedDate;
};