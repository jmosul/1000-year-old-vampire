import {
    createBrowserRouter,
} from 'react-router-dom';
import Start from './pages/start/Start';
import NewGame from './pages/NewGame/NewGame';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Start />,
    },
    {
        path: '/new',
        element: <NewGame />,
    }
])

export default router;
