export const convertToHumanReadableDate = (timestamp: string) => {
    return new Date(timestamp).toDateString()
}

export const convertToHumanReadableTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = { 
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short' 
    };
    return date.toLocaleTimeString(undefined, options);
}