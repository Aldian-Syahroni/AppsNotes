import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      createdAt: new Date().toISOString(),
      archived: false,
      charsRemaining: 50, // Set batas maksimal huruf pada judul
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const inputValue = event.target.value;

    // Menghitung jumlah huruf yang tersisa pada judul
    const charsRemaining = Math.max(0, 50 - inputValue.length);

    // Pastikan charsRemaining tidak negatif
    if (charsRemaining >= 0) {
      this.setState(() => {
        return { title: inputValue, charsRemaining: charsRemaining };
      });
    }
  }

  onBodyChangeHandler(event) {
    const inputValue = event.target.value;

    this.setState(() => {
      return { body: inputValue };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div className='note-input'>
          <h2>Buat Catatan</h2>
          <div>
            <label className='note-input__title__char-limit'>
              Sisa karakter: {this.state.charsRemaining}
            </label>
            <input
              className='note-input__title'
              type='text'
              placeholder='Masukkan Judul...'
              value={this.state.title}
              onChange={this.onTitleChangeHandler}
              maxLength={50}
            />
          </div>

          <textarea
            className='note-input__body'
            placeholder='Tulis catatan disini...'
            value={this.state.body}
            onChange={this.onBodyChangeHandler}
          />
          <button type='submit'>Buat</button>
        </div>
      </form>
    );
  }
}

export default NotesInput;
