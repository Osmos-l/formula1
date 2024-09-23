"use client"

import { Lap } from "@/models/openf1/lap";
import { Session } from "@/models/openf1/session";
import { getLapsFromSession } from '@/services/openf1';
import { useEffect, useState } from "react";

interface LapsPreviewProps {
    session: Session
}

const one_minute_into_ms = 60000;

const LapRow = ({ lap }: { lap: Lap}) => {
    return (
        <div className="w-full flex justify-around p-2">
            <span>{lap.lap_number}</span>
            <span>{lap.driver_number}</span>
            <span>{lap.duration_sector_1}</span>
            <span>{lap.duration_sector_2}</span>
            <span>{lap.duration_sector_3}</span>
            <span>{lap.is_pit_out_lap && "Oui" }</span>
        </div>
    );
};

export default function LapsPreview({ session }: LapsPreviewProps) {
    const [lapsMap, setLapsMap] = useState<Lap[] | null>(null);

    const fetchLaps = async () => {
        setLapsMap((await getLapsFromSession(session)));
    }

    useEffect(() => {
        fetchLaps();

        const intervalId = setInterval(fetchLaps, one_minute_into_ms);

        return () => {
            clearInterval(intervalId);
        };
    }, [session])

    return (
        <div className='p-2'>
            <h1>Laps <span className="italic text-xs">(Updated every minute)</span></h1>
            <div className="w-full flex justify-around p-2">
                <span>Lap: </span>
                <span>Driver: </span>
                <span>Sector 1: </span>
                <span>Sector 2: </span>
                <span>Sector 3: </span>
                <span>Pit: </span>
            </div>
            <div className="overflow-auto h-screen max-h-screen">
            {lapsMap && lapsMap.map((lap, i) => (
                        <LapRow key={i} lap={lap} />
                    ))}
            </div>
            
        </div>
    );
}
