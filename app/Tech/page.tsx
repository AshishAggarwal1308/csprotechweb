"use client"

import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="text-center text-4xl mb-8">
        <p>Under Maintenance</p>
      </div>
      <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go Back Home
      </Link>
    </div>
  );
}
