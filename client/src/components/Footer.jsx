function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-200 text-base-content">
      <div className="items-center grid-flow-col">
        <p className="mr-4">
          &copy; {new Date().getFullYear()} Credit Report Management System
        </p>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.29 20.251c7.547 0 11.675-2.121 11.675-5.927s-4.128 5.106-11.676 5.927z"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 8a6 6 0 016 6v8h-4v-8a2 2 0 00-2-2 2 2 0 00-2 2v8h-4v-8a6 6 0 016-6zM2 9h4v12H2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
