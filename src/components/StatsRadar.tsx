import { useEffect } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
import { PokemonStats } from "../models/pokemon";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const chartData: ChartData<"radar"> = {
  labels: [],
  datasets: [
    {
      label: 'Stats',
      data: [],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

interface StatsRadarProps {
  stats: PokemonStats;
}

export const StatsRadar: React.FC<StatsRadarProps> = ({stats}) => {
  useEffect(() => {
    chartData.labels = [];
    chartData.datasets[0].data = [];

    Object.entries(stats).forEach(([key, value]) => {
      chartData.labels!.push(key);
      chartData.datasets[0].data.push(value);
    });
  }, [stats]);

  return <>
    <div className="w-[500px] h-[500px]">
      <Radar data={chartData}/>
    </div>
  </>;
};