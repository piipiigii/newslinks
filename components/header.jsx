import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../public/logo.webp";

const Header = () => {
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <>
      <header className="py-4 bg-white shadow-sm">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-center">
                <div
                  className="position-relative me-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <Image
                    src={logo}
                    className="logo"
                    alt="NewsBird Logo"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
                <div className="text-center text-md-start">
                  <Link href="/" className="text-decoration-none">
                    <h1 className="h3 mb-0 text-dark fw-bold">
                      News Papers Links
                    </h1>
                    <p className="text-muted mb-0 small">
                      Your Gateway to Assamese Journalism
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Language Navigation */}
      <nav className="bg-white border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center py-3">
                <div className="btn-group" role="group">
                  <Link
                    href="/"
                    className={`btn px-4 ${
                      isActive("/") ? "btn-primary" : "btn-outline-primary"
                    }`}
                  >
                    Assamese
                  </Link>
                  <Link
                    href="/bangla"
                    className={`btn px-4 ${
                      isActive("/bangla")
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                  >
                    Bangla
                  </Link>
                  <Link
                    href="/english"
                    className={`btn px-4 ${
                      isActive("/english")
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                  >
                    English
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
