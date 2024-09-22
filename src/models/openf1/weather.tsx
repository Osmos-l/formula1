export type Weather = {
    air_temperature: number,
    date: string,
    humidity: number,
    pressure: number,
    rainfall: number,
    track_temperature: number,
    wind_direction: number,
    wind_speed: number,

    // Technical fields
    meeting_key: number,
    session_key: number
}

export const DEFAULT_WEATHER = {
    air_temperature: 0,
    date: 'Not Found',
    humidity: 0,
    pressure: 0,
    rainfall: 0,
    track_temperature: 0,
    wind_direction: 0,
    wind_speed: 0,
    meeting_key: 0,
    session_key: 0
}