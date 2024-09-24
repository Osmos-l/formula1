"use client"

import { Lap } from "@/models/openf1/lap";
import { Session } from "@/models/openf1/session";
import { getLapsFromSession } from '@/services/openf1';
import { useEffect, useState } from "react";
import LapsTable from "../Table/LapsTable";
import LapsTableSkeleton from "../Table/LapsTableSkeleton";

const one_minute_into_ms = 60000;

interface LapsPreviewProps {
    session: Session
}
export default function LapsPreview({ session }: LapsPreviewProps) {
    const [laps, setLapsMap] = useState<Lap[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchInitialLaps = async () => {
        setLoading(true);
        setLapsMap((await getLapsFromSession(session)));
        setLoading(false);
    }

    const fetchMoreLaps = async () => {

    }

    useEffect(() => {
        fetchInitialLaps();

        const intervalId = setInterval(fetchMoreLaps, one_minute_into_ms);

        return () => {
            clearInterval(intervalId);
        };
    }, [session])

    return (
        <div className='h-full p-2'>
            <h1>Laps <span className="italic text-xs">(Updated every minute)</span></h1>
            {
                loading && ( 
                    <div className="h-full overflow-hidden">
                        <LapsTableSkeleton />
                    </div>
                )
            }
            { (!loading && laps) && (
                <div className="h-full overflow-auto">
                    <LapsTable laps={laps} />
                </div>
            )}  
            { (!loading && !laps) && (
                <div className="h-full flex items-center justify-center">
                    <h1>No laps found</h1>
                </div>
            )}  
        </div>
    );
}
