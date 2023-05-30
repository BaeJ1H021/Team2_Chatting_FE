import axios from 'axios';
import { Refresh, refreshErrorHandle } from './refresh';

const client = axios.create({
	baseURL: '',
});

// client.interceptors.request.use(Refresh, refreshErrorHandle);

export default client;
