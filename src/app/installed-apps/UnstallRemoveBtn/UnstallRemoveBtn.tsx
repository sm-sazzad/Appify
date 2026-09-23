import { AppContext } from "@/Context/AppProvider";
import { IData } from "@/DataType/DataType";
import { useContext } from "react";
import { toast } from "react-toastify";

const Uninstall = ({ app, btnType }: { app: IData, btnType: string }) => {

    const { favouriteApp, setFavouriteApp, installedApp, setInstalledApp } = useContext(AppContext)

    const handleUnstall = () => {
        const reaminApps = installedApp.filter(n => n.id !== app.id);
        setInstalledApp(reaminApps);
        toast.info(`${app.title} is uninstalled`);
    }
    const handleRemove = () => {
        const reaminApps = favouriteApp.filter(n => n.id !== app.id);
        setFavouriteApp(reaminApps);
        toast.info(`${app.title} is removed`);
    }

    return (
        <button onClick={btnType === "installed" ? handleUnstall : handleRemove}
            aria-label={`Uninstall ${app.title}`}
            className='group/btn inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg border border-gray-200 text-gray-600 hover:border-red-500/40 hover:bg-red-50 hover:text-red-600 transition-all duration-300 cursor-pointer shrink-0'
        >
            <svg className='w-3.5 h-3.5 group-hover/btn:rotate-12 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
            </svg>
            {
                btnType === "installed" ? (<span className='hidden sm:inline'>Uninstall</span>) :
                    (<span className='hidden sm:inline'>Remove</span>)
            }

        </button>
    );
};

export default Uninstall;