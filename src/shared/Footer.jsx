import { Link } from "react-router";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa6";
import footerLogo from "../assets/logo.png";

const FOOTER_LINKS = [
  {
    heading: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "Apps", to: "/apps" },
      { label: "Installation", to: "/installation" },
      { label: "Trending", to: "/apps" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", to: "/" },
      { label: "Careers", to: "/" },
      { label: "Blog", to: "/" },
      { label: "Press Kit", to: "/" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", to: "/" },
      { label: "Contact Us", to: "/" },
      { label: "Privacy Policy", to: "/" },
      { label: "Terms of Service", to: "/" },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: <FaXTwitter />, href: "https://x.com", label: "X (Twitter)" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
  { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-inter bg-[#001931]">
      {/* footer */}
      <div className="container w-11/12 mx-auto pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {/* logo */}
            <Link to="/" className="flex items-center gap-2 w-fit">
              <div className="w-9 h-9 flex items-center justify-center">
                <img src={footerLogo} alt="" />
              </div>
              <span className="text-white xl:text-lg font-bold tracking-wide">
                HERO.IO
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-white max-w-xs">
              Discover, install, and manage world-class apps. Trusted by
              millions of users worldwide to find the best tools for work and
              life.
            </p>

            {/* Social links */}
            <div>
              <p className="text-xs font-semibold text-white uppercase tracking-widest mb-3">
                Social Links
              </p>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm text-white"
                    style={{ backgroundColor: "#1a2b3c" }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Divider */}
      <div className="container w-11/12 mx-auto border-t border-white/10" />

      {/* Bottom bar */}
      <div className="container w-11/12 mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FAFAFA]">
        <p>Copyright © {currentYear} HERO.IO — All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link to="/" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link to="/" className="hover:text-white transition-colors">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
