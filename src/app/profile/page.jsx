"use client"
import { UpdateProfile } from "@/components/UpdateProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const Profile = () => {
      const { data: session } = authClient.useSession();
    //   console.log(session)
      const user = session?.user;
      console.log(user)
    return (
        <div>
            <Card className="max-w-96 mx-auto mt-10 flex flex-col items-center bg-gray-50 gap-3 p-10">
                <Avatar className="h-20 w-20 rounded-full">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image || "https://www.pngfind.com/pngs/m/5-53216_male-avatar-silhouette-man-hd-png-download.png"}
                  referrerPolicy="no-referrerence"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <h3 className="text-2xl text-blue-950">{user?.name}</h3>
             <h3 className="text-xl text-accent">{user?.email}</h3>
             <UpdateProfile />
              </Card>
            
        </div>
    );
};

export default Profile;