import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://opentdb.com/api.php?',
    withCredentials: true,
});

export default apiClient;

// amount=20&category=13&difficulty=easy&type=multiple