import {
    createBrowserRouter,
} from 'react-router-dom';
import Start from './pages/start/Start';
import Game from './pages/Game/Game';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Start />,
    },
    {
        path: '/game/:gameId',
        element: <Game />,
    }
])

export default router;
