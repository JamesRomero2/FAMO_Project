import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { requestToServer } from "../api/GlobalAPI";
import { useCallback, useLayoutEffect, useState, useEffect } from "react";

const AnalysisReport = () => {
  const [frequentItems, setFrequentItems] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState((new Date().getMonth() + 1).toString());
  const [monthlyItemData, setMonthlyItemData] = useState([]);

  const months = [
    { text: 'January', value: '1' },
    { text: 'February', value: '2' },
    { text: 'March', value: '3' },
    { text: 'April', value: '4' },
    { text: 'May', value: '5' },
    { text: 'June', value: '6' },
    { text: 'July', value: '7' },
    { text: 'August', value: '8' },
    { text: 'September', value: '9' },
    { text: 'October', value: '10' },
    { text: 'November', value: '11' },
    { text: 'December', value: '12' }
  ];

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const passData = { month_num: selectedMonth };
      requestToServer('get', 'getAnalysisBasedOnMonth', passData, true)
      .then((response) => {
        setMonthlyItemData(response);
      }).catch((error) => {
        console.error('Server GET error:', error);
      });
    };
    fetchData();
  }, [selectedMonth]);

  const initialization = useCallback(async () => {
    requestToServer('get', 'getTopFrequentItems', '', true)
      .then((response) => {
        setFrequentItems(response);
      }).catch((error) => {
        console.error('Server GET error:', error);
      });
  }, []);

  useLayoutEffect(() => {
    initialization();
  }, [initialization]);

  // Calculate maximum delivery count
  const maxDeliveryCount = Math.max(...monthlyItemData.map(item => parseInt(item.delivery_count, 10)));

  return (
    <div className="flex flex-col w-full relative gap-4">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold text-lg">Analysis Report</p>
      </div>
      <p className="font-bold text-lg">Top 5 Frequently Ordered Items per Group</p>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {Object.entries(frequentItems).map(([groupAbbrev, groupData], index) => (
          <div key={index} className="bg-slate-100 rounded-lg p-4 shadow-md">
            <p className="bg-slate-300 p-2 rounded-md font-bold">
              {groupAbbrev} - {groupData.total_amount}
            </p>
            {groupData.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center justify-between p-2 gap-4">
                <p>{item.item_name}</p>
                <div className="">
                  <p className="py-1 px-3 rounded-full bg-pri text-white">{item.amount}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="font-bold text-lg">Monthly Inventory Analysis</p>
      <label htmlFor="month-select" className="block text-lg font-bold mb-2">Select Month:</label>
      <select
        id="month-select"
        value={selectedMonth}
        onChange={handleMonthChange}
        className="p-2 mb-6 border rounded-md"
      >
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.text}
          </option>
        ))}
      </select>

      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlyItemData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="delivery_date" />
            <YAxis domain={[0, maxDeliveryCount + 5]} />
            <Tooltip />
            <Bar dataKey="delivery_count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AnalysisReport;
