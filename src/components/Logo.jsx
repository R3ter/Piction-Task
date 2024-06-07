import pictionLogo from "../assets/pictionLogo.png";

const Logo = ({ style = {} }) => {
  return <img style={{ ...style }} src={pictionLogo} alt="Piction Health Logo" />;
};
export default Logo;
