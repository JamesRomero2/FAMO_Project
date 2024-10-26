/* eslint-disable react/prop-types */
import RoundedPanel from "./RoundedPanel";
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const getCurrentMonthName = () => {
  const date = new Date();
  return date.toLocaleString('default', { month: 'long' }); // E.g., 'October'
};

const SuppliesSummary = ({data}) => {
  return (
    <div className="sticky top-14">
      <RoundedPanel bgcolor={'bg-slate-100'}>
        <div className="w-80 max-w-80">
          <div className="flex flex-row items-end justify-between pb-2 border-b mb-2 border-slate-300">
            <p className="flex flex-col font-light">Supplies Out<span className="font-bold">Categories</span></p>
            <p className="text-sm font-light">MONTH OF {getCurrentMonthName().toLocaleUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center mb-4">
            {data.map((entry, index) => (
              <div key={index} className="flex items-center mx-2">
                <div
                  className="w-3 h-3 mr-2 rounded-full"
                  style={{ backgroundColor: entry.color }} // Use entry color
                ></div>
                <span className="text-gray-700 font-medium mr-2">{entry.name}</span>
                <span className="text-gray-500">({entry.value})</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <PieChart width={400} height={120}>
              <Pie
                data={data}
                cx={195}
                cy={100}
                startAngle={180}  // Start from the left middle of the circle
                endAngle={0}      // End at the right middle of the circle
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} /> // Use entry color
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </RoundedPanel>
    </div>
  );
}

export default SuppliesSummary