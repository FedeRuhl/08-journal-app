import { startSaveNote, startUploading } from '../../actions/notes';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import React from 'react'

const NotesAppBar = () => {
    
    const noteDate = moment().format('MMMM Do YYYY');
    const dispatch = useDispatch();
    const { active: note } = useSelector(state => state.notes);

    const handleSave = () => {
        dispatch(startSaveNote(note));
    };

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch(startUploading(file));
        }
    };

    return (
        <div className="nodes__appbar">
            <span>{ noteDate }</span>

            <input
                id="fileSelector"
                type="file"
                name="file"
                style={{ display:'none' }}
                onChange={ handleFileChange }
            />

            <div>
                <button
                    className="btn"
                    onClick={ handlePictureClick }
                >
                    Picture
                </button>
                <button 
                    className="btn"
                    onClick={ handleSave }
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default NotesAppBar
