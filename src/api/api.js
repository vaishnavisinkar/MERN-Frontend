// src/api/api.js
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8001";

export const fetchTransactions = async (selectedMonth, searchTerm, currentPage, perPage) => {
    const response = await axios.get(`/api/product/getAllTransactions`, {
        params: { month: selectedMonth, search: searchTerm, page: currentPage, perPage }
    });
    return response.data;
};

export const fetchStatistics = async (selectedMonth) => {
    const response = await axios.get(`/api/product/getStatistics`, { params: { month: selectedMonth } });
    return response.data;
};

export const fetchBarChartData = async (selectedMonth) => {
    const response = await axios.get(`/api/product/getBarChart`, { params: { month: selectedMonth } });
    return response.data;
};

export const fetchPieChartData = async (selectedMonth) => {
    const response = await axios.get(`/api/product/getPieChart`, { params: { month: selectedMonth } });
    return response.data;
};
