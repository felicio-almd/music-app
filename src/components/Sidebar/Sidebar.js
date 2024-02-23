import logoSpotify from '../../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe, faMusic, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="grid-in-sidebar h-full w-full top-0 left-0 bottom-0 p-3 ">
            <nav className="sidebar__navigation bg-sidebar-navigation rounded-lg pt-4 pr-0 pb-0 pl-4">
                <div className="logo bg-logo flex rounded-lg pt-4 pr-0 pb-0 pl-4">
                    <a href="/">
                        <img src={logoSpotify} alt="Logo" className='w-[80px]'/>
                    </a>
                </div>
                <ul className='mt-5 pt-0 pr-5 pb-[10px] pl-5'>
                    <li className='py-[10px] px-0 list-none'>
                        <a href="/" className='text-sidebar-ul font-semibold text-[14px]'>
                            <span className='mr-3'><FontAwesomeIcon icon={faHome} /></span>
                            <span className='mr-3'>Início</span>
                        </a>
                    </li>
                    <li className='py-[10px] px-0 list-none'>
                        <a href="/" className='text-sidebar-ul font-semibold text-[14px]'>
                            <span className='mr-3'><FontAwesomeIcon icon={faSearch} /></span>
                            <span className='mr-3'>Buscar</span>
                        </a>
                    </li>
                    <li className='py-[10px] px-0 list-none'>
                        <a href="/" className='text-sidebar-ul font-semibold text-[14px]'>
                            <span className='mr-3'><FontAwesomeIcon icon={faMusic} /></span>
                            <span className='mr-3'>Playlists</span>
                        </a>
                    </li>
                    <li className='py-[10px] px-0 list-none'>
                        <a href="/" className='text-sidebar-ul font-semibold text-[14px]'>
                            <span className='mr-3'><FontAwesomeIcon icon={faUser} /></span>
                            <span className='mr-3'>Artistas</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="bg-library rounded-lg flex flex-col justify-between p-2 md:p-4 text-library-button font-semibold text-sm md:text-base mt-4">
                <div className="flex justify-between">
                    <button className="text-library-button flex mr-10 bg-transparent border-0 text-center font-bold text-sm px-5 py-10">
                        <span className="text-[20px] font-light text-library-button mr-3 pr-2 "></span>
                        <span>Sua biblioteca</span>
                    </button>
                    <span className=""></span>
                </div>
                <section className="flex items-start justify-between gap-5 
                bg-search text-light-gray
                font-semibold text-base mx-0 py-4 px-5 rounded-xl
                ">
                    <div className="flex flex-col">
                        <span className="pb-[14px] text-white font-bold">Crie sua primeira playlist</span>
                        <span className="pb-[14px] text-white font-medium text-xs">É fácil, vamos te ajudar.</span>
                        <button className="flex justify-center bg-white text-black rounded-2xl font-bold text-sm py-2 px-2 border-0 w-113">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>
                <div className="mx-5 my-4">
                    <a href="/" className='text-light-gray font-medium text-sm hover:underline'>Cookies</a>
                </div>
                <div className="languages">
                    <button className=" items-center m-2 p-2 rounded-[20px] font-bold bg-transparent border border-gray-500 text-white cursor-pointer">
                        <span className='mr-3'><FontAwesomeIcon icon={faGlobe} /></span>
                        <span className='mr-3'>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;