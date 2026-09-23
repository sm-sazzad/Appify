"use client"

import { IData } from "@/DataType/DataType";
import React, { createContext, useState } from "react";


interface AppContextType {
    favouriteApp: IData[],
    setFavouriteApp: React.Dispatch<React.SetStateAction<IData[]>>,
    installedApp: IData[],
    setInstalledApp: React.Dispatch<React.SetStateAction<IData[]>>,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = createContext<AppContextType>({
    favouriteApp: [],
    setFavouriteApp: () => { },
    installedApp: [],
    setInstalledApp: () => { },
    isOpen: false,
    setIsOpen: () => { }
})

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [favouriteApp, setFavouriteApp] = useState<IData[]>([])
    const [installedApp, setInstalledApp] = useState<IData[]>([])
    const [isOpen, setIsOpen] = useState<boolean>(false)


    // const stateData = {
    //     favouriteApp, setFavouriteApp, installedApp, setInstalledApp
    // }

    return (
        <AppContext.Provider value={{ favouriteApp, setFavouriteApp, installedApp, setInstalledApp, isOpen, setIsOpen }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;