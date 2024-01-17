"use client";

import { GlobalContext } from "@/context";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { FaWindowClose } from "react-icons/fa";

export default function Header() {
  const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);

  const { status } = useSession();
  const router = useRouter();

  console.log(status);
  //test
  useEffect(() => {
    if (status === "authenticated") router.push("/");
  }, [status]);

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow">
      <div className="flex  flex-grow items-center gap-2 justify-start py-4 px-4 shadow md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            onClick={() => setSideBarOpen(!sideBarOpen)}
            className="hover:bg-body inline-flex items-center justify-center bg-strokedark px-6 py-3 text-lg text-white font-medium  rounded-full tracking-wide uppercase"
          >
            {sideBarOpen ? <FaWindowClose /> : <TiThMenuOutline />}
          </button>
        </div>
        <button
          onClick={() =>
            status === "authenticated" ? signOut() : signIn("google")
          }
          className="hover:bg-body inline-flex items-center justify-center bg-strokedark px-6 py-2 text-lg text-white font-medium tracking-wide hover:bg-red-500 rounded-full uppercase"
        >
          {status === "authenticated" ? "Déconnexion" : "Connexion"}
        </button>
      </div>
    </header>
  );
}
