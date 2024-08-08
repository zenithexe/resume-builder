import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Settings2 } from "lucide-react";
import CvLogo from "../assets/cv.png"

function SiteHeader() {
  return (
    <>
      <div className="grid grid-cols-5 p-2 bg-slate-100 rounded-t-xl">
        <img src={CvLogo} className="w-[50px] m-2" />
        <div className="col-start-2 col-span-3 justify-self-center self-center ml-2 text-2xl font-semibold leading-7 text-gray-700">
          Resume Builder
        </div>
        <div className="mr-2 col-start-5 justify-self-end self-center hover:cursor-pointer">
          <Dialog>
            <DialogTrigger asChild>
              <Settings2 />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Theme Setting</DialogTitle>
                <DialogDescription>
                  This Feature is still in beta. Coming Soon!
                </DialogDescription>
              </DialogHeader>

              <DialogFooter>
                <Button type="submit">Update Theme</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Separator className="col-span-5 mt-2" />
      </div>
      <div className=" bg-slate-100">
        
      </div>
    </>
  );
}

export default SiteHeader;
