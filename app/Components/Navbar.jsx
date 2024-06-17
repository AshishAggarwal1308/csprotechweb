"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Spinner,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";

const navListMenuItems = [
  {
    title: "Web Development",
    description: "Custom web development solutions tailored to your business needs.",
    icon: GlobeAmericasIcon,
    Link:"/webdevelopment"
  },
  {
    title: "Mobile App Development",
    description: "Design and development of intuitive mobile applications for iOS and Android platforms.",
    icon: PhoneIcon,
    Link:"/appdevelopment"

  },
  {
    title: "Cloud Computing",
    description: "Scalable and secure cloud solutions for efficient data management and accessibility.",
    icon: SunIcon,
    Link:"/cloudcomputing"

  },
  {
    title: "Data Analytics",
    description: "Insights-driven data analytics services to optimize business decision-making processes.",
    icon: NewspaperIcon,
    Link:"/dataanalytics"

  },
  {
    title: "Artificial Intelligence",
    description: "Harness the power of AI and machine learning to automate processes and gain predictive insights.",
    icon: TagIcon,
    Link:"/Ai"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive cybersecurity solutions to safeguard your digital assets and privacy.",
    icon: RectangleGroupIcon,
    Link:"/cybersecurity"
  },
  {
    title: "IT Consulting",
    description: "Expert guidance and strategic advice to help you leverage technology for business growth.",
    icon: UserGroupIcon,
    Link:"/counsulting"

  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description ,Link}, key) => (
      <a href={Link} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 text-[#7a2536] w-6 ",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 text-xl"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-xl">Home</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="/Tech"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-xl">
          Technology
        </ListItem>
      </Typography>

      <Typography
        as="a"
        href="About"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-xl">
          About us
        </ListItem>
      </Typography>

      <Typography
        as="a"
        href="Contact"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-xl">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const { data: session, status } = useSession();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <div className="w-full z-50">
      <Navbar fullWidth className="fixed top-0 z-50 bg-white shadow-md">
        <div className="px-6 py-4 lg:px-0 lg:py-0">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Link href="/">
              <Image alt="logo" className="pr-4" src="/logo.png" height={200} width={200} priority />
            </Link>
            <div className="hidden lg:block">
              <NavList />
            </div>
            <div className="hidden gap-2 lg:flex">
              {status === "loading" ? (
                <Spinner className="h-6 w-6" />
              ) : session ? (
                <Menu>
                  <MenuHandler>
                    {session.user.image ? (
                      <img
                        src={session.user.image}
                        alt="User Profile"
                        className="h-8 w-8 rounded-full"
                      />
                    ) : (
                      <IconButton>
                        <UserCircleIcon className="h-6 w-6" />
                      </IconButton>
                    )}
                  </MenuHandler>
                  <MenuList>
                    <MenuItem>
                      <Link href="/dashboard">Dashboard</Link>
                    </MenuItem>
                    <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <>
                  <Button onClick={() => signIn()} className="bg-[#7a2536]" size="sm">
                    Log In
                  </Button>
                  <Link href="/signup">
                    <Button className="outline bg-transparent text-black" size="sm">
                      Register now
                    </Button>
                  </Link>
                </>
              )}
            </div>
            <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden cursor-pointer"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
          <Collapse open={openNav}>
            <NavList />
            <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
              {status === "loading" ? (
                <Spinner className="h-6 w-6" />
              ) : session ? (
                <>
                  <Menu className="cursor-pointer">
                    <MenuHandler className="cursor-pointer" >
                      {session.user.image ? (
                        <img
                          src={session.user.image}
                          alt="User Profile"
                          className="h-8 w-8 rounded-full cursor-pointer"
                        />
                      ) : (
                        <IconButton>
                          <UserCircleIcon className="h-6 w-6" />
                        </IconButton>
                      )}
                    </MenuHandler>
                    <MenuList>
                      <MenuItem>
                        <Link href="/dashboard">Dashboard</Link>
                      </MenuItem>
                      <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                    </MenuList>
                  </Menu>
                </>
              ) : (
                <>
                  <Button onClick={() => signIn()} variant="gradient" size="xl" color="blue-gray" fullWidth>
                    Log In
                  </Button>
                  <Link href="/signup">
                    <Button variant="gradient" size="xl" fullWidth>
                      Register now
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}
