import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Search,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { FiSearch } from 'react-icons/fi';
import { IconContext } from 'react-icons';

export class Searchbar extends Component {
  state = {
    name: '',
  };
  hendlerOnChange = event => {
    this.setState({ name: event.target.value.toLowerCase() });
  };
  hendlerOnSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() === '') {
      alert('Bведите название поиска');
      return;
    }
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };
  render() {
    return (
      <>
        <Search>
          <SearchForm onSubmit={this.hendlerOnSubmit}>
            <IconContext.Provider
              value={{ style: { color: 'black', width: '2em', height: '2em' } }}
            >
              <SearchFormButton type="submit">
                <FiSearch />
                <SearchFormButtonLabel>Search</SearchFormButtonLabel>
              </SearchFormButton>
            </IconContext.Provider>
            <SearchFormInput
              value={this.state.name}
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.hendlerOnChange}
            />
          </SearchForm>
        </Search>
      </>
    );
  }
}
Searchbar.propTypes = { onSubmit: PropTypes.func };
