/* eslint-disable no-use-before-define */
export const formatDate = date => {
    if (!date) {
        return;
    }
    const d = new Date(date);
    const y = d.getFullYear();
    const m = d.getMonth() < 10 ? `0${d.getMonth()}` : d.getMonth();
    const da = d.getDate();
    return `${da}.${m}.${y}`;
};
export const formatDates = date => {
    if (!date) {
        return;
    }
    const Date = new Date(date);
};
