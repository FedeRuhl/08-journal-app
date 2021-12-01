import React from 'react';
import { useSelector } from 'react-redux';
import NoteScreen from '../notes/NoteScreen';
import NothingSelected from './NothingSelected';
import Sidebar from './Sidebar';

const JournalScreen = () => {

    const { active } = useSelector(state => state.notes);

    return (
        <div 
            className="journal__main-content animate__animated animate_fadeIn animate__faster"
        >
            <Sidebar />

            <main>
                {
                    (active)
                        ? <NoteScreen />
                        : <NothingSelected />
                }
            </main>
        </div>
    )
}

export default JournalScreen
