import React, { useState, useEffect } from 'react';
import MonthSelector from './components/MonthSelector';
import SearchBar from './components/SearchBar';
import TransactionTable from './components/TransactionTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import Pagination from './components/Pagination';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import {
  fetchTransactions,
  fetchStatistics,
  fetchBarChartData,
} from './api/api';

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState(3); 
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(10);


  const { data: transactionsData, isLoading: transactionsLoading } = useQuery({
    queryKey: ['transactions', { selectedMonth, searchTerm, currentPage, perPage }],
    queryFn: () => fetchTransactions(selectedMonth, searchTerm, currentPage, perPage),
    keepPreviousData: true,  
  });

  
  const { data: statisticsData, isLoading: statisticsLoading } = useQuery({
    queryKey: ['statistics', selectedMonth],
    queryFn: () => fetchStatistics(selectedMonth),
  });

 
  const { data: barChartData = [], isLoading: barChartLoading } = useQuery({
    queryKey: ['barChart', selectedMonth],
    queryFn: () => fetchBarChartData(selectedMonth),
  });

  useEffect(() => {
    if (transactionsData) {
      setTotalPages(Math.ceil(transactionsData.total / perPage));
    }
  }, [transactionsData, perPage]);

  return (
    <div className="App">
      <MonthSelector selectedMonth={selectedMonth} onMonthChange={(e) => setSelectedMonth(e.target.value)} />
      <SearchBar searchTerm={searchTerm} onSearchChange={(e) => setSearchTerm(e.target.value)} />

      {transactionsLoading ? (
        <p>Loading transactions...</p>
      ) : (
        <TransactionTable transactions={transactionsData?.transactions} />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        onPrevious={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        perPage={perPage}
        setPerPage={setPerPage}
      />

      {statisticsLoading ? (
        <p>Loading statistics...</p>
      ) : (
        <Statistics
          totalSales={statisticsData?.totalSaleAmount}
          soldItems={statisticsData?.soldItems}
          unsoldItems={statisticsData?.notSoldItems}
        />
      )}

      {barChartLoading ? (
        <p>Loading bar chart data...</p>
      ) : (
        barChartData.length ? <BarChart chartData={barChartData} /> : <p>No chart data available</p>
      )}
    </div>
  );
};

const queryClient = new QueryClient();

const AppWithQueryClient = () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

export default AppWithQueryClient;
