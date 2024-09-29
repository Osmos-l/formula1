"use client"

import { DTOSession } from "@/api/models/session";
import { DTOWeather } from "@/api/models/weather";
import { getLatestWeatherUpdateFromSession } from '@/api/openf1';
import { convertToHumanReadableTimeWithoutTimeZone } from "@/utils/timestamp";
import { useEffect, useState } from "react";

interface WeatherPreviewProps {
    session: DTOSession
}

const one_minute_into_ms = 60000;

const DisplayWeatherDetails = ({ weather }: { weather: DTOWeather}) => {
    return (
        <div className="w-full flex items-center p-2">
            <p className="w-2/3">
                - Air temperature: {weather?.air_temperature}°C<br />
                - Track temperature: {weather?.track_temperature}°C<br />
                - Wind direction: {weather?.wind_direction}°, {weather?.wind_speed} m/s<br />
                - Air pressure: {weather?.pressure} mbar
            </p>
            <p className="w-1/3 text-center">{convertToHumanReadableTimeWithoutTimeZone(weather?.date)}</p>
        </div>
    );
};

export default function WeatherPreview({ session }: WeatherPreviewProps) {
    const [weatherMap, setWeatherMap] = useState<DTOWeather[] | null>(null);

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
            <div className="overflow-auto h-screen max-h-screen">
            {weatherMap && weatherMap.map((weather, i) => (
                        <DisplayWeatherDetails key={i} weather={weather} />
                    ))}
            </div>
            
        </div>
    );
}
