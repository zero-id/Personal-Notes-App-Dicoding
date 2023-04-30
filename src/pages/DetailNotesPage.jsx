import React, { Component } from 'react';
import NotesDetail from '../components/NotesDetail';
import PropTypes from 'prop-types'
import { deleteNote, archiveNote, unarchiveNote, getNote } from '../utils/local-data'
import { useParams, useNavigate } from 'react-router-dom'
import PageNotFound404 from './PageNotFound404';

function DetailNotesPageWrapper(){
  const { id } = useParams();
  const navigate = useNavigate();
  return <DetailNotesPage navigate={navigate} id={id}/>
}

class DetailNotesPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      notes: getNote(props.id),
    }

    this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this);
    this.onArchiveNotesHandler = this.onArchiveNotesHandler.bind(this);
    this.onUnarchiveNotesHandler = this.onUnarchiveNotesHandler.bind(this);
  }

  onDeleteNotesHandler(id){
    deleteNote(id);
    this.props.navigate('/');
  }

  onArchiveNotesHandler(id) {
    archiveNote(id);
    this.props.navigate('/');
  }

  onUnarchiveNotesHandler(id) {
      unarchiveNote(id);
      this.props.navigate('/archives');
  }

  render(){

    if (this.state.notes === ''){
      return <p>Catatan tidak ditemukan</p>
    }

    if (this.state.notes === null){
      return <PageNotFound404 />
    }

    return (
      <>
        <NotesDetail
          onDelete={this.onDeleteNotesHandler}
          onArchive={this.onArchiveNotesHandler}
          onUnarchive={this.onUnarchiveNotesHandler}
          {...this.state.notes} />
      </>
    )
  }
}

DetailNotesPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,    
}
export default DetailNotesPageWrapper;