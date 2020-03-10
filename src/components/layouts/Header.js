import React from 'react';
import { MdAdd, MdOpacity} from 'react-icons/md';

export const Header = () => {
    // remember the Z-index here is 400 in tutorial;
    return <header className="Header border-b-2 border-gray-200 bg-white
        transition ease-in duration-200 shadow-base h-15 z-40 fixed w-full top-0" 
            data-testid="header">
        <nav className="Navbar grid items-center grid-cols-2 grid-rows-1 gap-0 max-w-screen-lg m-auto h-15">
            <div className="logo">
                <img className="w-12 h-12" src="/images/logo_textnone.png" alt="Breeze" />
            </div>
            <div className="flex justify-end">
                <ul className="flex align-center justify-right mr-8">
                    <li className="mr-2 hover:bg-gray-300 focus:bg-gray-500 p-1 rounded-md" data-testid="quick-add-task-action">
                        <MdAdd size={20} />
                    </li>
                    <li className="mr-2 hover:bg-gray-300 focus:bg-gray-500 p-1 rounded-md" data-testid="dark-mode-action">
                        <MdOpacity size={20} />
                    </li>
                </ul>
            </div>
        </nav>
    </header>
};