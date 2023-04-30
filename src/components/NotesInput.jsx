import React, { Component } from 'react';
import { FiCheck } from 'react-icons/fi'
import PropTypes from 'prop-types'

class NotesInput extends Component{
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: ''
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event){
    this.setState(() => {
      return {
        title: event.target.value
      }
    });
  }

  onBodyChangeEventHandler(event){
    this.setState(() => {
      return {
        body: event.target.innerHTML
      }
    })
  }

  onSubmitEventHandler(event){
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render(){
          return(
            <section className='add-new-page__input'>
              <form onSubmit={this.onSubmitEventHandler}>
                <input className='add-new-page__input__title' type='text' placeholder='Beri judul...' required value={this.state.title} onChange={this.onTitleChangeEventHandler} ></input>
                <div 
                  className='add-new-page__input__body'
                  contentEditable='true'
                  data-placeholder='Tuliskan catatanmu disini...' 
                  onInput={this.onBodyChangeEventHandler}>
                </div>
                <div className='add-new-page__action'>
                  <button className='action' type='submit' title='Simpan'><FiCheck /></button>
                </div>
              </form>
            </section>
          )
  }
}

NotesInput.propTypes = {
  addNote: PropTypes.func.isRequired
}

export default NotesInput;