import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { fetchItems } from '../services/api';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import { ImageGalleryList } from './ImageGallery.styled';
const APIKEY = '35491048-668e63f7ba8686a686ff97f20';
export class ImageGallery extends Component {
  state = {
    findItems: [],
    isLoading: false,
    error: null,
    page: 1,
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchName !== this.props.searchName) {
      this.setState({ isLoading: true });
      this.setState({ page: 1 });
      const search = this.props.searchName;
      const page = this.props.page;
      const url = `https://pixabay.com/api/?q=${search}&page=${page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`;
      try {
        const response = await fetchItems(url);
        this.setState({ findItems: response });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
      this.setState(prevState => {
        return { page: prevState.page + 1 };
      });
    }
  }
  handlerOnClick = async e => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
    if (this.state.page > 1) {
      this.setState({ isLoading: true });
      const search = this.props.searchName;
      const page = this.state.page;
      const url = `https://pixabay.com/api/?q=${search}&page=${page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`;
      try {
        const response = await fetchItems(url);
        this.setState(prevState => {
          return { findItems: [...prevState.findItems, ...response] };
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };
  render() {
    const { findItems, isLoading } = this.state;
    return (
      <div>
        {isLoading && <Loader />}
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
        {findItems.length > 0 && <Button onClick={this.handlerOnClick} />}
      </div>
    );
  }
}
ImageGallery.propTypes = {
  searchName: PropTypes.string,
  page: PropTypes.number,
};