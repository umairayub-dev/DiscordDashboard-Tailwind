import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import {
  FaHashtag,
  FaMoon,
  FaRegBell,
  FaSearch,
  FaSun,
  FaUserCircle,
} from "react-icons/fa";

const TopNavigation = () => {
  return <div className="top-navigation">
     <HashtagIcon />
      <Title />
      <ThemeIcon />
      <Search />
      <BellIcon />
      <UserIcon />
  </div>;
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </span>
  );
};

const Search = () => (
  <div className="search">
    <input type="text" className="search-input" placeholder="Search..." />
    <FaSearch size="18" className="text-secondary my-auto" />
  </div>
);
const BellIcon = () => <FaRegBell size="24" className="top-navigation-icon" />;
const UserIcon = () => (
  <FaUserCircle size="24" className="top-navigation-icon" />
);
const HashtagIcon = () => <FaHashtag size="20" className="title-hashtag" />;
const Title = () => <h5 className="title-text">Discord</h5>;
export default TopNavigation;
