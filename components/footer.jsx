import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <p className="text-center text-muted border-top pt-1">
        {new Date().getFullYear()} Made with love by{" "}
        <Link href="#">🦜NewsBird</Link>
      </p>
    </footer>
  );
};

export default Footer;
