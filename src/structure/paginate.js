import _ from 'lodash';

export const paginate = (foods, currentPage, perPage) => {
    const startIndex = (currentPage - 1) * perPage;
    return _(foods).slice(startIndex).take(perPage).value();
};