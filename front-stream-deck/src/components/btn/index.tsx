import axios from 'axios';
import { ButtonProps } from '../../intrerface/button';


const apiUrl: string = import.meta.env.VITE_BACKEND_URL


export const Button: React.FC<ButtonProps> = ({ label, icon, endpoint }: ButtonProps) => {
  const handleClick = async () => {
    try {
      await axios.get(`${apiUrl}/${endpoint}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button className="button" onClick={handleClick}>
      <img src={icon} alt={label} width={80} />
      <div>{label}</div>
    </button>
  );
};
