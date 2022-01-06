import { useUserContext } from '../context/user_context';

const Alert = ({ msg }) => {
  const { clearError } = useUserContext();

  return (
    <div>
      <h3>{msg}</h3>
      <button type="button" onClick={clearError}>
        X
      </button>
    </div>
  );
};

export default Alert;
