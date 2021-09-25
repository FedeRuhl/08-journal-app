import React from 'react'

const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style= {{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://2.bp.blogspot.com/-nNJLZRV7Nx8/TfGdHotaUwI/AAAAAAAAAIs/eYo6SY4FaoI/s400/homer_desesperado.gif)'
                }}
            >
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Title
                </p>
                <p className="journal__entry-content">
                    Content content content content content content content content
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}

export default JournalEntry
