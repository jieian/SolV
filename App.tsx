
import React from 'react';
import { useSolVData } from './hooks/useSolVData';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const solvData = useSolVData();

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <main className="mt-8">
          {solvData ? (
            <Dashboard data={solvData} />
          ) : (
            <div className="flex justify-center items-center h-96">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-400 mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-400">Connecting to SolV Charger...</p>
                </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
