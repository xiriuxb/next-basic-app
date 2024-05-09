import Link from "next/link";

const NavBarComponent = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Jorges</a>
      </div>
      <div className="flex-none"></div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about/contact">Contact</Link>
          </li>
          <li>
            <Link href="/githubusers">GitHub Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarComponent;
