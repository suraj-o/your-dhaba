import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full h-[5vh] flex justify-center items-center bg-light-black text-light-cream">
      <Link to={"https://github.com/suraj-o"} target="_blank">
        ❤️ Suraj
      </Link>
    </div>
  );
};
export default Footer;
