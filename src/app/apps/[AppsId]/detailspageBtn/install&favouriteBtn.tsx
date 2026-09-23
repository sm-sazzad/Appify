"use client"
import { AppContext } from "@/Context/AppProvider";
import { IData } from "@/DataType/DataType";
import { useContext } from "react";
import { IoMdHeart } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";
import { toast } from "react-toastify";



const InstallAppBtn = ({ apps }: { apps: IData }) => {

    const { installedApp, setInstalledApp } = useContext(AppContext)
    const isInstalled = installedApp.some(n => n.id === apps.id);

    const handleInstallBtn = () => {
        isInstalled ? (
            toast.warning(`${apps.title} is already installed`)
        ) : (
            setInstalledApp([...installedApp, apps]),
            toast.success(`${apps.title} is successfully istalled`)
        )
    }

    return (
        <button onClick={handleInstallBtn}
            className={`group relative inline-flex items-center gap-2.5 py-3.5 px-9 bg-linear-to-r ${isInstalled ? "bg-indigo-800 text-white ring-2 ring-indigo-300" : "from-[#7d73f2] to-purple-600"} hover:from-[#6b60e8] hover:to-purple-700 rounded-2xl font-bold text-sm text-white shadow-xl shadow-[#7d73f2]/30 hover:shadow-2xl hover:shadow-[#7d73f2]/40 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer overflow-hidden`}>
            <span className='absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700' />
            {
                isInstalled ? (<IoCheckmarkDone />) :
                    (<>
                        <svg className='relative w-4 h-4 group-hover:translate-y-0.5 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 4v12m0 0l-4-4m4 4l4-4' />
                        </svg>
                    </>)
            }
            <span className='relative'>{!isInstalled ? "Install Now" : "Installed"}</span>
        </button >
    );
};


const FavouriteBtn = ({ apps }: { apps: IData }) => {

    const { favouriteApp, setFavouriteApp } = useContext(AppContext);
    const isFavourite = favouriteApp.some(n => n.id === apps.id)

    const handleFavouriteApp = () => {
        if (isFavourite) {
            const remainingApps = favouriteApp.filter(n => n.id !== apps.id);
            setFavouriteApp(remainingApps);
            toast.info(`${apps.title} remove from your favourite list`)
        } else {
            setFavouriteApp([...favouriteApp, apps]);
            toast.success(`${apps.title} added to your favourite list`)
        }
    }


    return (
        <button onClick={handleFavouriteApp}
            aria-label='Add to wishlist'
            className='group w-13 h-13 inline-flex items-center justify-center rounded-2xl bg-white border border-gray-200 hover:border-[#7d73f2]/40 hover:bg-[#7d73f2]/5 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md'
        >
            {
                isFavourite ? (
                    <IoMdHeart className="text-red-600 text-xl" />
                ) : (<>
                    <svg className='w-5 h-5 text-gray-500 group-hover:text-[#7d73f2] group-hover:scale-110 transition-all' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                    </svg>
                </>)
            }
        </button >
    )
}


export default InstallAppBtn;
export { FavouriteBtn };