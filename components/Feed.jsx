import { SparklesIcon } from "@heroicons/react/24/outline";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { db } from "../firebase";
import Input from "./Input";
import { useSession, signIn, signOut } from "next-auth/react";

import Post from "./Post";

export default function Feed() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    []
  );
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[626px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        {!session? <button
          onClick={signIn}
          className="bg-blue-400 text-white ml-auto rounded-full w-24 h-8 font-bold shadow-md hover:brightness-95 text-lg  md:hidden"
        >
          Sign in
        </button> : ""}
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5"/>
        </div>
      </div>
      <Input/>
      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
           <Post key={post.id} id={post.id} post={post} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}