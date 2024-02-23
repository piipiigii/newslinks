import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import links from "../data/links";
import logo from "../public/logo.webp";
import InstallPWA from "../components/installPWA";

export default function Home() {
  return (
    <>
      <Head>
        <title>Assamese News Papers</title>
        <meta name="title" content="Assamese News Papers" />
        <meta name="author" content="NewsBird" />
        <meta
          name="description"
          content="Assamese News Paper Links"
        />
        <meta
          name="keywords"
          content="News Paper Links, News, Assamese News Papers, ePapers"
        />
        <link rel="canonical" href="https://asnews.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asnews.vercel.app" />
        <meta property="og:title" content="Assamese News Papers" />
        <meta
          property="og:description"
          content="Assamese News Paper Links"
        />
        <meta property="og:image" content="https://asnews.vercel.app/website.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://asnews.vercel.app" />
        <meta property="twitter:title" content="Assamese News Papers" />
        <meta
          property="twitter:description"
          content="Assamese News Paper Links"
        />
        <meta property="twitter:image" content="https://asnews.vercel.app/website.png" />
      </Head>
<body className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg my-3">
        <div className="content container d-flex justify-content-between">
          <div className="d-flex justify-content-center align-items-center">
            <Image src={logo} className="logo img-fluid mx-2" alt="Logo" />
            <Link className="navbar-brand" href="/">
            Assamese News Papers
            </Link>
            
          </div>
          {/* <button className="btn navbar-btn">Hello</button> */}
        </div>
      </nav>

      <main className="mt-3">
        <div className="content container">
          <div className="row d-flex justify-content-center">
            {links.map((item) => {
              return (
                <div key={item.id} className="col-md-4 col-6 my-2">
                  <div className="cards-wrap">
                    <Link href={item.url} rel="noreferrer" target="_blank">
                      <div className="cards p-3 d-flex justify-content-center">
                        <div className="cards-content">
                          <Image
                            src={item.img}
                            className="img-fluid cards-img"
                            alt=""
                          />
                          <h3 className="my-2 cards-name">{item.name}</h3>
                          <p className="text-muted cards-about">{item.about}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center">
            <InstallPWA />
          </div>
      </main>
      </body>

      <footer className="mt-auto">
        
        <p className="text-center text-muted border-top pt-1">
        
          Made with love by{" "}
          <Link href="#">🦜NewsBird</Link>
        </p>
      </footer> 
    </>
  );
}
