
import React, { Component } from 'react';
import { Container } from './App.styled';
import {Searchbar} from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchName: '',
    page: 1,
  };
  handlerSubmit = name => {
    this.setState({ searchName: name });
  };
  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handlerSubmit} />
        <ImageGallery
          searchName={this.state.searchName}
          page={this.state.page}
        />
      </Container>
    );
  }
}

