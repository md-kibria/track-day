import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Brush,
  ReferenceLine,
} from 'recharts';
import formatSecondsToHHMMSS from '../utils/second-to-time';
import { differenceInSeconds, format } from 'date-fns';
import getCurrentTimeInSeconds from '../utils/getCurrentTimeInSeconds';
import toCapitalize from '../utils/toCapitalize';
import useTask from '../hooks/useTask';

// let data = [];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px' }}>
        <p className="label">{`${toCapitalize(label)}`}</p>
        <p className="intro" style={{ color: payload[0].fill, paddingTop: 5, fontSize: 13 }}>{`Time: ${formatSecondsToHHMMSS(payload[0].payload.time[1] - payload[0].payload.time[0], true)}`}</p>
        <p className="intro" style={{ color: payload[0].fill, paddingTop: 5, fontSize: 13 }}>{`Duri: ${formatSecondsToHHMMSS(payload[0].payload.time[0])} ~ ${formatSecondsToHHMMSS(payload[0].payload.time[1])}`}</p>
      </div>
    );
  }

  return null;
};

export default function HomeBar() {

  const {today:day} = useTask();
  const startDate = new Date(format(day.date, 'MM-dd-yyyy'));
  const [data, setData] = useState([]);
  const [refTime, setRefTime] = useState(0);


  useEffect(() => {
    const ndata = [];
    setData([]);
    day.tasks.forEach(task => {
      ndata.push({
        name: task.title,
        time: [differenceInSeconds(task.startAt, startDate), differenceInSeconds(task.endAt, startDate)]
      })
    })
    setData(ndata)
  }, [day])

  const formatXAxis = (tickItem) => {
    return formatSecondsToHHMMSS(tickItem);
  };

  useEffect(() => {
    let intervalId = setInterval(() => {
      setRefTime(getCurrentTimeInSeconds())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        layout='vertical'
        margin={{
          top: 5,
          right: 30,
          left: -60,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type='number' tickFormatter={formatXAxis} />
        {/* XAxis domain={[0, 86400]} */}
        <YAxis tick={false} dataKey="name" type='category' />
        <Tooltip content={<CustomTooltip />} />
        <ReferenceLine x={refTime} stroke="#f00" />
        {/* <Brush dataKey="time" height={30} stroke="#8884d8" /> */}
        <Bar dataKey="time" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

