import React from 'react';
import { MdExpandMore, MdInbox, MdToday, MdDateRange, } from 'react-icons/md';

export const Sidebar = () => ( 
    <div data-testid="sidebar"
        className="w-64 h-full pt-24 fixed border-r-2 border-gray-200 bg-orange-100">
        <ul className="sidebar__generic">
            <li data-testid="inbox" className="flex items-center justify-start bg-orange-100 hover:bg-orange-200 p-2 rounded-lg">
                <span className="mr-2">
                    <MdInbox size={24} />
                </span>
                <span>Inbox</span>
            </li>
            <li data-testid="today" className="flex items-center justify-start bg-orange-100 hover:bg-orange-200 p-2 rounded-lg">
                <span className="mr-2">
                    <MdToday size={24} />
                </span>
                <span>Today</span>
            </li>
            <li data-testid="next_7" className="flex items-center justify-start bg-orange-100 hover:bg-orange-200 p-2 rounded-lg">
                <span className="mr-2">
                    <MdDateRange size={24} />
                </span>
                <span>Next 7 days</span>
            </li> 
        </ul>

        <div className="sidebar__middle" className="flex items-center justify-start bg-orange-100 hover:bg-orange-200 p-2 rounded-lg">
            <span className="mr-2">
                <MdExpandMore size={24} />
            </span>
            <h2>Projects</h2>
        </div>

        <ul className="sidebar__projects">Projects will be here!</ul>
        Add Project Components Here!
    </div>
);