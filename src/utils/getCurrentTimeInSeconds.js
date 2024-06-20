import { getHours, getMinutes, getSeconds } from 'date-fns';

// Step 3: Get the current time and convert to seconds
export default function getCurrentTimeInSeconds() {
    const now = new Date();
    const hours = getHours(now);
    const minutes = getMinutes(now);
    const seconds = getSeconds(now);

    // Convert hours and minutes to seconds and sum up
    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    
    return totalSeconds;
}