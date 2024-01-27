import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import NavButton from "./NavButton";

export default () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // Move to external component with smooth scroll
  const JumpLink = ({ href, children }) => (
    <a href="#" className="flex items-center">
      {children}
    </a>
  );

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 font-monospace uppercase tracking-wider lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavButton>
        <JumpLink href="#">Home</JumpLink>
      </NavButton>
      <NavButton>
        <JumpLink href="#">Portfolio</JumpLink>
      </NavButton>
      <NavButton>
        <JumpLink href="#">About</JumpLink>
      </NavButton>
    </ul>
  );

  return (
    <Navbar className="px-4 py-2 lg:px-8 lg:py-4" shadow={false}>
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        {/* TODO: Replace with SVG logo */}
        <div className="flex flex-col cursor-pointer">
          <Typography className="block mx-auto font-medium">
            WonderByte
          </Typography>
          <Typography className="block mx-auto font-small" variant="small">
            Powered by Innovation
          </Typography>
        </div>
        <div className="hidden mx-auto lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </Navbar>
  );
};
