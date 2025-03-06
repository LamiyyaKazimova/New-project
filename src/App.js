import './App.css';
import { BrowserRouter } from 'react-router-dom';  
import Routers from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {
  return (

     <QueryClientProvider client={queryClient}>
    <BrowserRouter >
    < Routers/>
  </BrowserRouter>
  </QueryClientProvider>

  )
}

export default App;