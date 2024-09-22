"use client"

import { Session } from "@/models/openf1/session";
import { Weather } from "@/models/openf1/weather";
import { getLatestWeatherUpdateFromSession } from '@/services/openf1';
import { convertToHumanReadableTime } from "@/utils/timestamp";
import { useEffect, useState } from "react";

interface WeatherPreviewProps {
    session: Session
}

const one_minute_into_ms = 60000;

const DisplayWeatherDetails = ({ weather }: { weather: Weather}) => {
    return (
        <div>
            <span>At {convertToHumanReadableTime(weather?.date)}</span>
            <p className='px-5'>
                - Air temperature: {weather?.air_temperature}°C<br />
                - Track temperature: {weather?.track_temperature}°C<br />
                - Wind direction: {weather?.wind_direction}°, {weather?.wind_speed} m/s<br />
                - Air pressure: {weather?.pressure} mbar
            </p>
        </div>
    );
};

export default function WeatherPreview({ session }: WeatherPreviewProps) {
    const [weatherMap, setWeatherMap] = useState<Weather[] | null>(null);

    const fetchWeather = async () => {
        setWeatherMap((await getLatestWeatherUpdateFromSession(session)));
    }

    useEffect(() => {
        fetchWeather();

        const intervalId = setInterval(fetchWeather, one_minute_into_ms);

        return () => {
            clearInterval(intervalId);
        };
    }, [session])

    return (
        <div className='p-2'>
            <h1>Actual Weather <span className="italic text-xs">(Updated every minute)</span></h1>
            <div>
            {weatherMap && weatherMap.map((weather, i) => (
                        <DisplayWeatherDetails key={i} weather={weather} />
                    ))}
            </div>
            
        </div>
    );
}
