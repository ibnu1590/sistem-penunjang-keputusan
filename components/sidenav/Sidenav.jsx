import Link from "next/link"
import { XIcon} from "@heroicons/react/outline"
import { navData } from "../../utils/SidenavItems/sidenavitems"
import { useContext } from "react"
import { MenuContext } from "../../context/menu/Menu.context"
export const Sidenav = () => {
    const {open, setOpen} = useContext(MenuContext)
    return(
        <div>
            <div 
                className={`fixed inset-y-0 inset-x-0 ${
                    open ? 'translate-x-0' : '-translate-x-full'
                } transition-all duration-75 bg-[#3a3a3a70]`}
            >
            <div 
                className={`fixed w-80 translate-x-0 bg-gray-50 h-full ${
                    open ? 'translate-x-0' : '-translate-x-full'
                } transform transition-all duration-300 overflow-y-auto`}
            >
                <div className=" items-center justify-center mt-5">
                    <button className="absolute right-4" onClick={() => setOpen(false)}>
                        <XIcon className="h-8 w-8 text-gray-800" />
                    </button>
                    <div className="flex space-x-3 items-center justify-center p-10">
                    <Link href={"/"}>
                    <a className="flex px-6 py-2 border-gray-800 border-2 space-x-3 text-gray-800 rounded-md">
                        <span className="text-2xl text-gray-800">SPK</span>
                        <span className="text-2xl text-yellow-400"> Pemilihan Kreditur</span>
                    </a>
                </Link>
                </div>
                </div>
                
                {navData.menuItems.map((item, index)=>(
                    <div key={index} className="flex flex-col space-y-2 mb-2">
                        {item.items.map(({seconTitle, link, title, icon}, index)=>(
                            <div key={index} className="text-gray-50 flex flex-col">
                                {seconTitle && <span className="pl-5 text-gray-400">{seconTitle}</span>}
                                {title && (
                                <Link href={"/"}>
                                    <a className="flex space-x-4 items-center p-5 hover:bg-gray-200 text-gray-800"
                                    onClick={() => setOpen(false)}>
                                    <span className="text-gray-800">{icon}</span>
                                    <span className="text-lg capitalize">{title}</span>
                                    </a>
                                </Link>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}