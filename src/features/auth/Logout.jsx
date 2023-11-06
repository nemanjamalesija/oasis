import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import ButtonIcon from '../../ui/ButtonIcon';
import { useLogout } from './useLogout';

const Logout = () => {
  const { logOut } = useLogout();

  return (
    <ButtonIcon onClick={logOut}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
};

export default Logout;
