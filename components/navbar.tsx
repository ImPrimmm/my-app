"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4">
      <ul className="gap-4 flex">
        <li className="hover:bg-orange-300 px-4 rounded-sm cursor-pointer">
          Home
        </li>
        {session && (
          <>
            <li className="hover:bg-orange-300 px-4 rounded-sm cursor-pointer">
              About
            </li>
            <li className="hover:bg-orange-300 px-4 rounded-sm cursor-pointer">
              Contact
            </li>
            {session?.user.role === "admin" && (
              <>
                <li className="hover:bg-orange-300 px-4 rounded-sm cursor-pointer">
                  Admin
                </li>
                <li className="hover:bg-orange-300 px-4 rounded-sm cursor-pointer">
                  Dashboard
                </li>
              </>
            )}
            <li>
              <span
                className={
                  session.user.role === "admin"
                    ? "bg-emerald-300 px-4 rounded-sm"
                    : "bg-blue-300 px-4 rounded-sm"
                }
              >
                {session.user.role}
              </span>
            </li>
            <li>
              <button
                onClick={() => signOut()}
                className="cursor-pointer px-4 bg-red-400 hover:bg-red-600 text-white rounded-md"
              >
                SignOut
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
