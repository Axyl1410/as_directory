import Navbar from "@/layout/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-red-500">Home</h1>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </div>
    </>
  );
}
