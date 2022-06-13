import moment from 'moment';

export const fromNow = (time) => {
    return moment(time).fromNow();
}