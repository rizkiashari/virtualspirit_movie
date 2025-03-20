import HomePage from "./pages/Home.page";
import './App.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

function App() {

  return (
      <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <div className="container mx-auto">
              <HomePage />
          </div>
      </QueryClientProvider>
  )
}

export default App
