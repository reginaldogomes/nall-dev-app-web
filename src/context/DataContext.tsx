// contexts/DataContext.tsx
import { createContext, ReactNode, useContext } from 'react'

interface Data {
  name: string
}

interface DataContextProps {
  data: Data
}

const DataContext = createContext<DataContextProps | undefined>(undefined)

export function DataProvider({
  children,
  data,
}: {
  children: ReactNode
  data: Data
}) {
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  )
}

export function useData() {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context.data
}
