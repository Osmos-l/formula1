"use client"

import { Session } from "@/models/openf1/session";
import { Weather } from "@/models/openf1/weather";
import { getLatestWeatherUpdateFromSession } from '@/services/openf1';
import { useEffect, useState } from "react";

interface WeatherPreviewProps {
    session: Session
}

const one_minute_into_ms = 60000;

export default function WeatherPreview({ session }: WeatherPreviewProps) {
    const [weather, setWeather] = useState<Weather | null>(null);

    const fetchWeather = async () => {
        setWeather(await getLatestWeatherUpdateFromSession(session));
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
            <p className='px-5'>
                - Air temperature: {weather?.air_temperature}°C<br />
                - Track temperature: {weather?.track_temperature}°C<br />
                - Wind direction: {weather?.wind_direction}°, {weather?.wind_speed} m/s<br />
                - Air pressure: {weather?.pressure} mbar
            </p>
        </div>
    );
}
