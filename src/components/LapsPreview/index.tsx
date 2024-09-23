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
    if (!lap) {
        return ( <p>No Lap !</p> )
    }

    const getSectorColorClass = (segmentSector: number[] | undefined) => {
        if (!segmentSector) return '';

        if (segmentSector.includes(2051)) return 'bg-purple-500';
        if (segmentSector.includes(2049)) return 'bg-green-500';
        if (segmentSector.includes(2048)) return 'bg-yellow-500';
    };

    return (
        <tr className="text-center">
            <td>{lap.lap_number ?? "N/A"}</td>
            <td>{lap.driver_number ?? "N/A"}</td>
            <td className={getSectorColorClass(lap.segments_sector_1)}>{lap.duration_sector_1 ?? "N/A"}</td>
            <td className={getSectorColorClass(lap.segments_sector_2)}>{lap.duration_sector_2 ?? "N/A"}</td>
            <td className={getSectorColorClass(lap.segments_sector_3)}>{lap.duration_sector_3 ?? "N/A"}</td>
            <td>{lap.st_speed}</td>
            <td>{lap.is_pit_out_lap ? "Yes" : "No"}</td>
        </tr>
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
        <div className='h-full p-2'>
            <h1>Laps <span className="italic text-xs">(Updated every minute)</span></h1>
            <div className="h-full overflow-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th>Lap</th>
                        <th>Driver</th>
                        <th>Sector 1</th>
                        <th>Sector 2</th>
                        <th>Sector 3</th>
                        <th>Top Speed (km/h)</th>
                        <th>Pit</th>
                    </tr>
                </thead>
                <tbody>
                {lapsMap && lapsMap.slice(0, 150).map((lap, i) => (
                            <LapRow key={i} lap={lap} />
                        ))}
                </tbody>
            </table>      
            </div>      
        </div>
    );
}
