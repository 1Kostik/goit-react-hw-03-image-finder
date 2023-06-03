import { Loader } from './Button.styled';
const Button = ({ onClick }) => {
  
  return <Loader onClick={onClick}>Load more</Loader>;
};
Button.propTypes = {};
export default Button;
