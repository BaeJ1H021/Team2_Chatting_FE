import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Chatpage from './pages/ChatPage';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import Root from './Root';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './pages/ProtectedRoute';
import LoginHome from './pages/LoginHome';
import KakaoAuth from './pages/KakaoAuth';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				element: <Signup />,
			},
			{
				path: 'kakao',
				element: <KakaoAuth />,
			},
			{
				path: 'home',
				element: <HomePage />,
			},
			{
				path: '/',
				element: <ProtectedRoute />,
				children: [
					{
						path: 'chats',
						element: <Chatpage />,
					},
				],
			},
		],
	},
]);

export default router;
