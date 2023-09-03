import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center gap-2 bg-gray-800 py-8 text-sm text-gray-100">
      <address>hello@haneenkhan.com</address> |
      <p>
        Website by {""}
        <Link to="https://alizehkhan.com" target="_blank" className="underline">
          Alizeh
        </Link>
      </p>
    </div>
  );
};

export default Footer;
