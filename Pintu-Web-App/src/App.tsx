import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import MainRouter from './MainRouter'
import BottomAds from './presentation/global_components/BottomAds'
import CompanyDetail from './presentation/global_components/CompanyDetail'
import HeaderApp from './presentation/global_components/HeaderApp'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col">
        <HeaderApp />
        <MainRouter />
        <CompanyDetail />
        <BottomAds />
      </div>
    </QueryClientProvider>
  )
}

export default App
