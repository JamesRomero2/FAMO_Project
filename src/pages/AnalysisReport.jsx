import { useState } from "react"
import RoundedPanel from "../components/RoundedPanel"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AnalysisReport = () => {
  const [activeTab, setActiveTab] = useState('Quarter');
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
  return (
    <div className="flex flex-col w-full relative gap-4">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold text-lg">Request Approval / Archive</p>
      </div>
      <RoundedPanel bgcolor={'bg-slate-100'}>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <span className="text-sm font-light">Activity</span>
            <p className="font-bold text-lg">Online Users</p>
          </div>
          <div className="flex justify-center ">
            {['Quarter', 'Semester', 'Annual'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-4 py-2 m-2 rounded-md ${
                  activeTab === tab ? 'bg-pri text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data[activeTab]}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="users"
              fill="#8884d8"
              background={{ fill: '#eee' }} // Adding background to each bar
            />
          </BarChart>
        </ResponsiveContainer>
      </RoundedPanel>

      <RoundedPanel bgcolor={'relative mb-5 bg-slate-100'}>
        <div className="flex flex-row justify-between items-center">
          <p className="font-bold text-lg my-2">Production Report</p>
        </div>
        <div className="flex items-center justify-center mb-4">
          <div className="flex flex-row gap-4 items-center justify-between max-w-screen-lg overflow-x-auto whitespace-nowrap">
            <div className="flex overflow-x-auto whitespace-nowrap gap-2">
              <div className="w-96 min-w-80">
                <p className="bg-slate-300 p-2 rounded-md">Category 1</p>
                <div className="flex items-center justify-between p-2">
                  <p>Total</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">10,000</p></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <p>Item 1</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">5,000</p></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <p>Item 2</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">5,000</p></div>
                </div>
              </div>
              <div className="w-96 min-w-80">
                <p className="bg-slate-300 p-2 rounded-md">Category 1</p>
                <div className="flex items-center justify-between p-2">
                  <p>Total</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">10,000</p></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <p>Item 1</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">5,000</p></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <p>Item 2</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">5,000</p></div>
                </div>
              </div>
              <div className="w-96 min-w-80">
                <p className="bg-slate-300 p-2 rounded-md">Category 1</p>
                <div className="flex items-center justify-between p-2">
                  <p>Total</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">10,000</p></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <p>Item 1</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">5,000</p></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <p>Item 2</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">5,000</p></div>
                </div>
              </div>
              <div className="w-96 min-w-80">
                <p className="bg-slate-300 p-2 rounded-md">Category 1</p>
                <div className="flex items-center justify-between p-2">
                  <p>Total</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">10,000</p></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <p>Item 1</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">5,000</p></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <p>Item 2</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">5,000</p></div>
                </div>
              </div>
              <div className="w-96 min-w-80">
                <p className="bg-slate-300 p-2 rounded-md">Category 1</p>
                <div className="flex items-center justify-between p-2">
                  <p>Total</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">10,000</p></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <p>Item 1</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">5,000</p></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <p>Item 2</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">5,000</p></div>
                </div>
              </div>
              <div className="w-96 min-w-80">
                <p className="bg-slate-300 p-2 rounded-md">Category 1</p>
                <div className="flex items-center justify-between p-2">
                  <p>Total</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">10,000</p></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <p>Item 1</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">5,000</p></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <p>Item 2</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">5,000</p></div>
                </div>
              </div>
              <div className="w-96 min-w-80">
                <p className="bg-slate-300 p-2 rounded-md">Category 1</p>
                <div className="flex items-center justify-between p-2">
                  <p>Total</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">10,000</p></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <p>Item 1</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">5,000</p></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <p>Item 2</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">5,000</p></div>
                </div>
              </div>
              <div className="w-96 min-w-80">
                <p className="bg-slate-300 p-2 rounded-md">Category 1</p>
                <div className="flex items-center justify-between p-2">
                  <p>Total</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">10,000</p></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <p>Item 1</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">5,000</p></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <p>Item 2</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">5,000</p></div>
                </div>
              </div>
              <div className="w-96 min-w-80">
                <p className="bg-slate-300 p-2 rounded-md">Category 1</p>
                <div className="flex items-center justify-between p-2">
                  <p>Total</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">10,000</p></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <p>Item 1</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">5,000</p></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <p>Item 2</p>
                  <div className=""><p className="py-1 px-3 rounded-full bg-pri text-white">5,000</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data[activeTab]}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="users"
              fill="#8884d8"
              background={{ fill: '#eee' }} // Adding background to each bar
            />
          </BarChart>
        </ResponsiveContainer>
      </RoundedPanel>
    </div>
  )
}

export default AnalysisReport