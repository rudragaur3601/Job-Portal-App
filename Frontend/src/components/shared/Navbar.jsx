import React from "react";
import { IoSearch } from "react-icons/io5";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
  const user = true;
  return (
    <div className="bg-white  border-x-2">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-20">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span>
              <IoSearch className="text-xl" />
            </span>
            Job
            <span className="text-[#f83002]">Portal</span>
          </h1>
        </div>
        <div className="flex gap-10">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Button variant="outline">Login</Button>

              <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                Signup
              </Button>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 ">
                <div>
                  <div className="flex gap-3 items-center p-2 ">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Rudra</h3>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum, dolor sit amet consectetur
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col my-2 text-gray-600 p-2 gap-2">
                    <div className="flex w-fit items-center gap-2 cursor-pointer ">
                      <User2 />
                      <Button variant="link">View Profile</Button>
                    </div>
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button variant="link">Logout</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
