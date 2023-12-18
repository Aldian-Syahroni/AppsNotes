import React from "react";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ searchTerm: e.target.value });
    this.props.onSearch(e.target.value);
  };

  render() {
    return (
      <div className='note-search'>
        <input
          type='text'
          id='search'
          placeholder='Cari catatan...'
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default SearchInput;
