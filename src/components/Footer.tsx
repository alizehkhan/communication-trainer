import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <p className="text-sm py-6 text-center text-gray-600">
      Website by {''}
      <Link to="https://alizehkhan.com" target="_blank" className="underline">
        Alizeh
      </Link>
    </p>
  );
};

export default Footer;
