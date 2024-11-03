import RoundedPanel from "../components/RoundedPanel"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { requestToServer } from "../api/GlobalAPI";
import { useCallback, useLayoutEffect, useState } from "react";

const AnalysisReport = () => {
  const [activeTab, setActiveTab] = useState('Quarter');
  const [frequentItems, setFrequentItems] = useState([])
  const data = {
    Quarter: [
      { name: 'Q1', users: 4000 },
      { name: 'Q2', users: 3000 },
      { name: 'Q3', users: 5000 },
      { name: 'Q4', users: 2000 },
    ],
    Semester: [
      { name: 'S1', users: 7000 },
      { name: 'S2', users: 8000 },
    ],
    Annual: [
      { name: '2023', users: 15000 },
    ],
  };

  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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

  return (
    <div className="flex flex-col w-full relative gap-4">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold text-lg">Analysis Report</p>
      </div>

      <RoundedPanel bgcolor={'relative mb-5 bg-slate-100'}>
        <div className="flex flex-row justify-between items-center">
          <p className="font-bold text-lg my-2">Frequently Ordered Items / Groups Ordering</p>
        </div>
        <div className="flex items-center justify-center mb-4">
          <div className="flex flex-row gap-4 items-center justify-between max-w-screen-lg overflow-x-auto whitespace-nowrap">
            <div className="flex overflow-x-auto whitespace-nowrap gap-4">
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
          </div>
        </div>
      </RoundedPanel>
    </div>
  )
}

export default AnalysisReport