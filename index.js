import moment from 'moment';
import '../../node_modules/moment/locale/tr';
moment.locale('tr');

export const generateStringDate = (date) => {
    return moment(new Date(date)).format("HH:mm | DD MMMM YYYY");
}