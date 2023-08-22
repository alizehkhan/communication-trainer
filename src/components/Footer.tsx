import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center gap-2 py-6 text-sm text-gray-600">
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
