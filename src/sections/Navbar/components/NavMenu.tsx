import { MobileMenuButton } from "@/sections/Navbar/components/MobileMenuButton";

export const NavMenu = () => {
  return (
    <div className="relative [align-items:normal] box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] md:items-center md:flex">
      <MobileMenuButton />
      <ul
        role="menu"
        className="absolute text-sm [align-items:normal] bg-white shadow-[rgba(0,0,0,0.05)_0px_2px_4px_0px] box-border caret-transparent hidden flex-col leading-5 list-none min-h-0 min-w-0 outline-[3px] z-[5] border border-zinc-300 mt-1 pl-0 rounded-bl rounded-br rounded-tl rounded-tr border-solid right-0 md:static md:items-center md:bg-transparent md:shadow-none md:flex md:flex-row md:min-h-[auto] md:min-w-[auto] md:border-zinc-800 md:mt-0 md:rounded-none md:border-0 md:border-none"
      >
        <li className="static box-border caret-transparent min-h-0 min-w-[200px] outline-[3px] md:relative md:min-h-[auto] md:min-w-0">
          <a
            href="/p/rrethnesh"
            className="box-border caret-transparent block outline-[3px] ml-0 p-2 md:ml-4 md:p-0 hover:underline"
          >
            Rreth nesh
          </a>
        </li>
        <li className="static box-border caret-transparent min-h-0 min-w-[200px] outline-[3px] md:relative md:min-h-[auto] md:min-w-0">
          <a
            href="/sign_in"
            className="box-border caret-transparent block outline-[3px] ml-0 p-2 md:ml-4 md:p-0 hover:underline"
          >
            Login
          </a>
        </li>
        <li className="static box-border caret-transparent min-h-0 min-w-[200px] outline-[3px] md:relative md:min-h-[auto] md:min-w-0">
          <a
            href="/sign_up"
            className="box-border caret-transparent block outline-[3px] ml-0 p-2 md:ml-4 md:p-0 hover:underline"
          >
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  );
};
