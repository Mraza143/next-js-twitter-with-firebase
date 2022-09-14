import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon  } from "@heroicons/react/24/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
  Cog6ToothIcon
  
} from "@heroicons/react/24/outline";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/* Twitter Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          alt="Twitter Logo"
        ></Image>
      </div>

      {/* Menu */}

      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        {session && (
          <>
           <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={Cog6ToothIcon} />

          </>
        )}
      </div>

      {/* Button */}

      {session ? (
        <>
          <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
            Tweet
          </button>
      {/* Mini-Profile */}

      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
      <Image
          width="60"
          height="60"
          src="http://thispix.com/wp-content/uploads/2015/06/Edit-7576-1-300x300.jpg"
          alt="User Profile"
          className="rounded-full xl:mr-2 "
        ></Image>
        <div className="leading-5 hidden xl:inline ml-4">
          <h4 className="font-bold ">Muhammad Raza</h4>
          <p className="text-gray-500">@mraza</p>
          <Cog6ToothIcon className="h-5 xl:ml-8 hidden xl:inline"/>
        </div>
        </div>
        </>
      ) : (
        <button
          onClick={signIn}
          className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline"
        >
          Sign in
        </button>
      )}

      </div>
  );
}
/*
 <Image
          width="60"
          height="60"
          src="http://thispix.com/wp-content/uploads/2015/06/Edit-7576-1-300x300.jpg"
          alt="User Profile"
          className="rounded-full xl:mr-2 "
        ></Image>
        <div className="leading-5 hidden xl:inline ml-4">
          <h4 className="font-bold ">Muhammad Raza</h4>
          <p className="text-gray-500">@mraza</p>
          <Cog6ToothIcon className="h-5 xl:ml-8 hidden xl:inline"/>
        </div>
 */