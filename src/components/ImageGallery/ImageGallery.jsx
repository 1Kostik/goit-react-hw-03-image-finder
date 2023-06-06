import React, { Component } from 'react';
import { fetchItems } from '../services/api';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import { ImageGalleryList, Text } from './ImageGallery.styled';
import { Searchbar } from '../Searchbar/Searchbar';

export class ImageGallery extends Component {
  state = {
    query: '',
    findItems: [],
    isLoading: false,
    error: null,
    page: 1,
    isShowButton: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const { query, page,findItems } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getPhotos(query, page);
      if (findItems.length > 12) {
        this.setState({ isLoading: true });
      };
    }
  }
  handlerSubmit = name => {
    this.setState({ query: name, findItems: [], page: 1, isShowButton: false });
  };
  handlerOnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  getPhotos = async (query, page) => {
    this.setState({ isLoading: true });
    const currentPage = this.state.page;
    const per_page = 12;
    try {
      const { hits, totalHits } = await fetchItems(query, page);
      if (hits.length === 0) {
        this.setState({ isEmpty: true });
        return;
      }
      this.setState(({ findItems }) => ({
        findItems: [...findItems, ...hits],
        isShowButton: currentPage < Math.ceil(totalHits / per_page),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  render() {
    const { findItems, isLoading, isShowButton, error } = this.state;
    const isShowImages = findItems.length > 0;
    return (
      <>
        <Searchbar onSubmit={this.handlerSubmit} />
        {isLoading && <Loader />}
        {isShowImages && (
          <ImageGalleryList>
            {findItems &&
              findItems.map(({ id, webformatURL, largeImageURL, tags }) => {
                return (
                  <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    tags={tags}
                  />
                );
              })}
          </ImageGalleryList>
        )}
        {isShowButton && <Button onClick={this.handlerOnClick} />}
        {error && <Text textAlign="center">{error}</Text>}
      </>
    );
  }
}
