import React from 'react'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Some aweasome title"
                    className="notes__title-input"
                />
                <textarea
                    placeholder="What happened today?"
                    className="notes__textarea"
                >
                </textarea>
                <div className="notes__image">
                    <img 
                        src="https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg"
                        alt="landscape"
                    />
                </div>
            </div>
        </div>
    )
}

export default NoteScreen
