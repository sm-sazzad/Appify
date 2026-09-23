"use client"

import { IData } from "@/DataType/DataType";
import React, { createContext, useState } from "react";


interface AppContextType {
    favouriteApp: IData[],
    setFavouriteApp: React.Dispatch<React.SetStateAction<IData[]>>,
    installedApp: IData[],
    setInstalledApp: React.Dispatch<React.SetStateAction<IData[]>>,
}

export const AppContext = createContext<AppContextType>({
    favouriteApp: [],
    setFavouriteApp: () => { },
    installedApp: [],
    setInstalledApp: () => { }
})

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [favouriteApp, setFavouriteApp] = useState<IData[]>([])
    const [installedApp, setInstalledApp] = useState<IData[]>([])

    // const stateData = {
    //     favouriteApp, setFavouriteApp, installedApp, setInstalledApp
    // }

    return (
        <AppContext.Provider value={{ favouriteApp, setFavouriteApp, installedApp, setInstalledApp }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;