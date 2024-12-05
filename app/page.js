import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Fragment } from "react";
import Link from "next/link";
export default function Home() {
  return (
    <Fragment>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="w-32">
          <h1 className="text-center text-green-800 font-bold">STUPRO</h1>
          <div className="flex gap-1 text-center mt-2">
            <Button>
              <Link href={"/category"}>Category</Link>
            </Button>
            {/* avatar */}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
