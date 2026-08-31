import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { PowerIcon } from "@heroicons/react/24/outline";

export default async function SignButtons() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    return (
      <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
        <PowerIcon className="w-6" />
        <div className="hidden md:block">Sign Out</div>
      </button>
    );
  } else {
    return (
      <>
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <PowerIcon className="w-6" />
          <div className="hidden md:block">
            <a href="/signup">Sign Up</a>
          </div>
        </button>

        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <PowerIcon className="w-6" />
          <div className="hidden md:block">
            <a href="/signin">Sign In</a>
          </div>
        </button>
      </>
    );
  }
}
