import styled from '@emotion/styled';
export const ImageGalleryList = styled.ul`
  display: grid;
  max-width: calc(66vw - 30px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;

  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  margin-bottom: ${({ marginBottom }) => (!marginBottom ? 0 : marginBottom)};
`;
