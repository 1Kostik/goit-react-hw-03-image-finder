import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Modal } from '../Modal/Modal';
import { ImageGalleryList, Image } from './ImageGalleryItem.styled';
export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;

    return (
      <ImageGalleryList>
        <Image src={webformatURL} alt={tags} onClick={this.toggleModal} />
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImg={largeImageURL}
            tags={tags}
          />
        )}
      </ImageGalleryList>
    );
  }
}
ImageGalleryItem.propTypes = {
  searchName: PropTypes.string,
  page: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};
