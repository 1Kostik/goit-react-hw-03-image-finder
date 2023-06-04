import { Loader } from './Button.styled';
const Button = ({ onClick }) => {
  return <Loader onClick={onClick}>Load more</Loader>;
};
export default Button;
