import React, { createContext, useState } from 'react'

export const MainContext = createContext()
function MainContextProvider({children}) {
    const [count, setCount] = useState(0)

  return (
    <MainContext.Provider value={[count, setCount]}>
        {children}
    </MainContext.Provider>
  )
}

export default MainContextProvider