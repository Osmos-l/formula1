import { Lap } from "@/models/openf1/lap";

const TableHeader = () => {
    return (
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
    );
}

interface RowProps {
    lap: Lap
}
const Row = ({ lap }: RowProps) => {
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
            <td>{lap.is_pit_out_lap && "Yes"}</td>
        </tr>
    );
}

interface LapsTableProps {
    laps: Lap[]
}
export default function LapsTable({ laps }: LapsTableProps) {
    return (
        <table className="table-auto w-full">
            <TableHeader />
            <tbody>
            {laps && laps.map((lap, i) => (
                <Row key={i} lap={lap} />
            ))}
            </tbody>
        </table>
    );
  }
  