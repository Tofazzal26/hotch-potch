import AuthenticResult from "@/components/AuthenticResult/AuthenticResult";
import Brand from "@/components/Brand/Brand";
import Results from "@/components/Results/Results";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#12141d]">
      <Brand />
      <Results />
      <AuthenticResult />
    </div>
  );
}
