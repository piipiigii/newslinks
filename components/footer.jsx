import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-white border-top border-gray-500">
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <span className="text-gray-600 text-sm">
              © {currentYear} News Papers Links
            </span>
          </div>
          
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-2">
              <span className="text-gray-500 text-sm">Made with</span>
              <span className="text-rose-400" style={{ fontSize: '1em' }}>❤️</span>
              <span className="text-gray-500 text-sm">by</span>
              <Link 
                href="#" 
                className="text-decoration-none font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                🦜 NewsBird
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;