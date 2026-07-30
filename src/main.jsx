import { createRoot } from 'react-dom/client'
import Portal from './layouts/Portal.jsx'
import Dashboard from './pages/Dashboard.jsx'

createRoot(document.getElementById('root')).render(
    <Portal>
        <Dashboard />
    </Portal>
)
