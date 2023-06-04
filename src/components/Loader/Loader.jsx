import { ColorRing } from 'react-loader-spinner';
import { LoaderWraper } from './Loader.styled';
const Loader = () => {
  return (
    <LoaderWraper>
      <ColorRing
        visible={true}
        height="90"
        width="90"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#81a5bd', '#117abf']}
      />
    </LoaderWraper>
  );
};
export default Loader;
