import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import Image from 'next/image'

import links from "../data/links";
import logo from "../public/logo.webp";
export default function Home() {
  return (
    <>
      <Head>
        <title>Assamese News Paper Links</title>
        <meta name="title" content="News Paper Links" />
        <meta name="author" content="News Paper Links" />
        <meta
          name="description"
          content="Assamese News Paper Links"
        />
        <meta
          name="keywords"
          content="News Paper Links, News, Assamese News Papers"
        />
        <link rel="canonical" href="https://asnews.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asnews.vercel.app" />
        <meta property="og:title" content="Assamese News Paper Links" />
        <meta
          property="og:description"
          content="News Paper Links"
        />
        <meta property="og:image" content="./website.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://asnews.vercel.app" />
        <meta property="twitter:title" content="Assamese News Paper Links" />
        <meta
          property="twitter:description"
          content="Assamese News Paper Links"
        />
        <meta property="twitter:image" content="./website.png" />
      </Head>

      <nav className="navbar navbar-expand-lg my-3">
        <div className="content container d-flex justify-content-between">
          <div className="d-flex justify-content-center align-items-center">
            <Image src={logo} className="logo img-fluid mx-2" alt="Logo" />
            <Link className="navbar-brand" href="/">
            Assamese News Paper
            </Link>
          </div>
          {/* <button className="btn navbar-btn">Hello</button> */}
        </div>
      </nav>

      <main className="mt-4">
        <div className="content container">
          <div className="row d-flex justify-content-center">
            {links.map((item) => {
              return (
                <div key={item.id} className="col-md-4 col-6 my-3">
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
      </main>

      <footer className="my-2">
        <p className="text-center">
          Made with ❤️ by{" "}
          <Link href="#">News Paper Links</Link>
        </p>
      </footer> 
    </>
  );
}
