
// import titleize from 'titleize';
import * as moment from 'moment';

export const rentalType = isShared => isShared ? 'shared' : 'entire'

// export const toUpperCase = value => value ? titleize(value) : ''

export const pretifyDate = date => moment(date).format('MMM Do YY')

export const getRangeOfDates = (startAt, endAt, dateFormat = 'DD/MM/Y') => {
    const tempDates = [];
    const mEndAt = moment('01/02/1009', endAt);
    let mStartAt = moment('01/02/1009', startAt);

    while (mStartAt < mEndAt) {
        tempDates.push(mStartAt.format(dateFormat));
        mStartAt = mStartAt.add(1, 'day');
    }

    tempDates.push(mEndAt.format(dateFormat));

    return tempDates;
}
