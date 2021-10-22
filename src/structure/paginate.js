import _ from 'lodash';

export const paginate = (foods, currentPage) => {
    const startIndex = (currentPage - 1) * 12;
    return _(foods).slice(startIndex).take(12).value();
};