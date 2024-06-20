import {differenceInMilliseconds} from 'date-fns';

function formatDuration(durationInMilliseconds) {
    let seconds = Math.floor((durationInMilliseconds / 1000) % 60);
    let minutes = Math.floor((durationInMilliseconds / (1000 * 60)) % 60);
    let hours = Math.floor((durationInMilliseconds / (1000 * 60 * 60)) % 24);

    // Pad the numbers to ensure two digits
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

function getTimeDifference(startDate, endDate) {
    const durationInMilliseconds = differenceInMilliseconds(endDate, startDate);
    return formatDuration(durationInMilliseconds);
}

export default getTimeDifference