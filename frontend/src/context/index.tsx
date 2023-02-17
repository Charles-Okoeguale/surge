import { createContext, useState } from "react";

export interface IContextType {
  stage : number
  setStage : React.Dispatch<React.SetStateAction<number>>
}

export const Appcontext = createContext<IContextType | any>('')

export const AppContext = ({children} : any) => {
  const [userprofile, setUserprofile] = useState({
    email : '',
    username : '',
    password : '',
    genres : [],
    favoriteArtiste : []
  })
  return (
    <Appcontext.Provider value={{userprofile, setUserprofile}}>
        {children}
    </Appcontext.Provider>
  )
}
