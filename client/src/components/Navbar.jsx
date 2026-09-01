import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

/* =========================================================
   NAVIGATION
========================================================= */

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/dhruvyadav123",
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dhruv-yadav-5a40b8370/",
    icon: LinkedInIcon,
  },
];

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =======================================================
     HEADER SCROLL STATE
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     MOBILE BODY LOCK + ESCAPE KEY
  ======================================================= */

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  /* =======================================================
     HOME CLICK
  ======================================================= */

  const handleHomeClick = () => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className={[
          "fixed inset-x-0 top-0 z-[100] w-full",
          "border-b transition-all duration-300",

          scrolled
            ? [
                "border-white/[0.08]",
                "bg-[#080808]/95",
                "shadow-[0_12px_40px_rgba(0,0,0,0.32)]",
                "backdrop-blur-xl",
              ].join(" ")
            : [
                "border-white/[0.04]",
                "bg-[#080808]/88",
                "backdrop-blur-lg",
              ].join(" "),
        ].join(" ")}
      >
        <div
          className="
            mx-auto flex h-[74px] w-full max-w-[1280px]
            items-center justify-between
            px-5
            sm:px-6
            lg:px-8
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <NavLink
            to="/"
            onClick={handleHomeClick}
            aria-label="Dhruv Yadav portfolio home"
            className="
              relative z-[110]
              flex shrink-0 items-center
              focus-visible:outline-none
            "
          >
            <div className="flex flex-col">
              <div className="flex items-center">
                <span
                  className="
                    text-[20px] font-black
                    tracking-[-0.04em]
                    text-white
                    sm:text-[22px]
                  "
                >
                  Dhruv
                  <span className="ml-1.5 text-[#EBA134]">
                    Yadav
                  </span>
                </span>

                <span
                  className="
                    ml-1.5 mt-[-12px]
                    size-[5px]
                    rounded-full
                    bg-[#EBA134]
                  "
                  aria-hidden="true"
                />
              </div>

              <span
                className="
                  mt-[2px]
                  hidden
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-white/35
                  sm:block
                "
              >
                Full Stack Developer
              </span>
            </div>
          </NavLink>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            aria-label="Primary navigation"
            className="
              absolute left-1/2
              hidden -translate-x-1/2
              items-center
              lg:flex
            "
          >
            <div className="flex items-center gap-1">
              {navLinks.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  onClick={
                    item.href === "/"
                      ? handleHomeClick
                      : undefined
                  }
                  className={({ isActive }) =>
                    [
                      "group relative",
                      "flex h-[74px] items-center",
                      "px-[13px]",
                      "text-[13px] font-semibold",
                      "transition-colors duration-200",

                      isActive
                        ? "text-white"
                        : "text-white/48 hover:text-white",
                    ].join(" ")
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.name}</span>

                      <span
                        className={[
                          "absolute bottom-0",
                          "left-1/2 h-[2px]",
                          "-translate-x-1/2",
                          "rounded-t-full",
                          "bg-[#EBA134]",
                          "transition-all duration-300",

                          isActive
                            ? "w-6 opacity-100"
                            : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-60",
                        ].join(" ")}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* =================================================
              DESKTOP RIGHT SIDE
          ================================================= */}

          <div className="hidden shrink-0 items-center lg:flex">
            {/* SOCIAL LINKS */}

            <div className="flex items-center gap-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="
                      flex size-9
                      items-center justify-center
                      text-white/42
                      transition-colors duration-200
                      hover:text-[#EBA134]
                    "
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

            <div
              className="
                mx-3 h-5 w-px
                bg-white/[0.1]
              "
              aria-hidden="true"
            />

            {/* CTA */}

            <Link
              to="/contact"
              className="
                group inline-flex h-10
                items-center justify-center
                gap-2 rounded-full
                bg-[#EBA134]
                px-5
                text-[12px] font-bold
                text-[#120E08]
                transition-all duration-300
                hover:bg-[#F0AD49]
                hover:shadow-[0_8px_24px_rgba(235,161,52,0.18)]
              "
            >
              Let&apos;s Talk

              <span
                className="
                  transition-transform duration-300
                  group-hover:translate-x-[2px]
                  group-hover:-translate-y-[2px]
                "
              >
                <ArrowUpRightIcon />
              </span>
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="
              relative z-[110]
              flex size-10
              items-center justify-center
              text-white
              transition-colors duration-200
              hover:text-[#EBA134]
              lg:hidden
            "
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE BACKDROP
      ===================================================== */}

      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={() => setMenuOpen(false)}
        className={[
          "fixed inset-0 z-[80]",
          "bg-black/65",
          "backdrop-blur-[2px]",
          "transition-opacity duration-300",
          "lg:hidden",

          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <div
        id="mobile-navigation"
        className={[
          "fixed inset-x-0 top-[74px] z-[90]",
          "border-b border-white/[0.08]",
          "bg-[#090909]",
          "shadow-[0_24px_60px_rgba(0,0,0,0.55)]",
          "transition-all duration-300",
          "lg:hidden",

          menuOpen
            ? [
                "pointer-events-auto",
                "translate-y-0",
                "opacity-100",
              ].join(" ")
            : [
                "pointer-events-none",
                "-translate-y-3",
                "opacity-0",
              ].join(" "),
        ].join(" ")}
      >
        <div
          className="
            mx-auto w-full max-w-3xl
            px-5 py-5
            sm:px-6
          "
        >
          {/* MOBILE NAV LINKS */}

          <nav
            aria-label="Mobile navigation"
            className="flex flex-col"
          >
            {navLinks.map((item, index) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                onClick={() => {
                  setMenuOpen(false);

                  if (
                    item.href === "/" &&
                    location.pathname === "/"
                  ) {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }
                }}
                className={({ isActive }) =>
                  [
                    "group flex min-h-[52px]",
                    "items-center justify-between",
                    "border-b border-white/[0.055]",
                    "text-sm font-semibold",
                    "transition-colors duration-200",

                    index === 0
                      ? "border-t border-white/[0.055]"
                      : "",

                    isActive
                      ? "text-[#EBA134]"
                      : "text-white/58 hover:text-white",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>

                    {isActive ? (
                      <span
                        className="
                          size-1.5 rounded-full
                          bg-[#EBA134]
                        "
                      />
                    ) : (
                      <span
                        className="
                          text-white/20
                          transition-all duration-200
                          group-hover:translate-x-1
                          group-hover:text-white/50
                        "
                      >
                        <ArrowRightIcon />
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* =================================================
              MOBILE BOTTOM
          ================================================= */}

          <div className="pt-5">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="
                flex min-h-12 w-full
                items-center justify-center
                gap-2 rounded-full
                bg-[#EBA134]
                px-5
                text-sm font-bold
                text-[#120E08]
                transition-colors duration-200
                hover:bg-[#F0AD49]
              "
            >
              Let&apos;s Talk
              <ArrowUpRightIcon />
            </Link>

            <div
              className="
                mt-5 flex
                items-center justify-between
              "
            >
              <p
                className="
                  text-[11px]
                  font-medium
                  text-white/30
                "
              >
                Connect with me
              </p>

              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="
                        flex items-center
                        gap-1.5
                        text-[11px] font-semibold
                        text-white/45
                        transition-colors duration-200
                        hover:text-[#EBA134]
                      "
                    >
                      <Icon />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FIXED HEADER SPACER
      ===================================================== */}

      <div
        className="h-[74px]"
        aria-hidden="true"
      />
    </>
  );
}

/* =========================================================
   MENU ICON
========================================================= */

function MenuIcon({ open }) {
  return (
    <span
      className="relative block h-[18px] w-[22px]"
      aria-hidden="true"
    >
      <span
        className={[
          "absolute left-0",
          "top-[2px]",
          "h-[1.5px] w-[22px]",
          "rounded-full",
          "bg-current",
          "transition-all duration-300",

          open
            ? "top-[8px] rotate-45"
            : "",
        ].join(" ")}
      />

      <span
        className={[
          "absolute right-0",
          "top-[8px]",
          "h-[1.5px]",
          "rounded-full",
          "bg-current",
          "transition-all duration-200",

          open
            ? "w-0 opacity-0"
            : "w-[15px] opacity-100",
        ].join(" ")}
      />

      <span
        className={[
          "absolute bottom-[2px]",
          "left-0",
          "h-[1.5px] w-[22px]",
          "rounded-full",
          "bg-current",
          "transition-all duration-300",

          open
            ? "bottom-[8px] -rotate-45"
            : "",
        ].join(" ")}
      />
    </span>
  );
}

/* =========================================================
   GITHUB ICON
========================================================= */

function GitHubIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

/* =========================================================
   LINKEDIN ICON
========================================================= */

function LinkedInIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

/* =========================================================
   ARROW UP RIGHT
========================================================= */

function ArrowUpRightIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

/* =========================================================
   ARROW RIGHT
========================================================= */

function ArrowRightIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}
