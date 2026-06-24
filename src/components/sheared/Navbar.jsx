"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Skeleton } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [open,setOpen] = useState(false);
  const { data: session,isPending,error } = authClient.useSession();
  const user = session?.user;
  console.log('this is session ',user);
  
  const handleSignOut =async () =>{
    await authClient.signOut()
    router.push('/signIn')
  }
  console.log('ispending,user',isPending,user);
  // if(isPending){
  //  return (
  //    <div className="flex items-center gap-3">
  //     <Skeleton className="rounded-full">
  //       <div className="h-8 w-8 rounded-full" />
  //     </Skeleton>

  //     <Skeleton className="rounded-lg">
  //       <div className="h-8 w-20" />
  //     </Skeleton>
  //   </div>
  //  )
  // }
  // if(error){
  //   return(
  //     <div>
  //       User data doesn't find
  //     </div>
  //   )
  // }

  //   console.log('this is isPending ',isPending);
  //   console.log('this is error',error)
  
  return (
    <div className="border-b px-2 ">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center" onClick={() => setOpen(!open)}>
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg cursor-pointer">pixgen.</h3>
        </div>
        <ul className="hidden  md:flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>
   <div className="md:hidden ">

   
        {open && (
        <ul className={`md:hidden mt-4 flex flex-col gap-3  text-white bg-purple-300 backdrop-blur-sm  transition-all duration-300 ease-out rounded-2xl absolute top-9 z-20  left-2 p-6 ${
    open
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-5 pointer-events-none"
  }`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-photos">All Photos</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>
      )}
      </div>

        <div className="flex gap-4">
          {isPending ?(<div className="flex items-center gap-3">
      <Skeleton className="rounded-full">
        <div className="h-8 w-8 rounded-full" />
      </Skeleton>

      <Skeleton className="rounded-lg">
        <div className="h-8 w-20" />
      </Skeleton>
    </div>)
           : user ? <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image || "https://www.pngfind.com/pngs/m/5-53216_male-avatar-silhouette-man-hd-png-download.png"}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
            </div> : !user ? <div className="flex items-center gap-3 text-sm">
             <Link href="/SignUp">SignUp</Link>
            <Link href="/signIn">SignIn</Link>
           </div> : <div>
             User data doesn't find
           </div>
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;