import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import ButtonIcon from '../../ui/ButtonIcon';
import { useLogout } from './useLogout';
import SpinnerMini from '../../ui/SpinnerMini';

const Logout = () => {
  const { isLoading, logOut } = useLogout();

  return (
    <ButtonIcon onClick={logOut}>
      {isLoading ? (
        <SpinnerMini />
      ) : (
        <HiArrowRightOnRectangle />
      )}
    </ButtonIcon>
  );
};

export default Logout;
