import { ImFacebook, ImTwitter, ImInstagram } from 'react-icons/im';

import './SocialIcons.scss';

const SocialIcons = () => {
  return (
    <div className="socila-icons">
      <span className="socila-icons__icon">
        <ImFacebook />
      </span>
      <span className="socila-icons__icon">
        <ImTwitter />
      </span>
      <span className="socila-icons__icon">
        <ImInstagram />
      </span>
    </div>
  );
};

export default SocialIcons;
