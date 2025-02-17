import AuthenticResult from "@/components/AuthenticResult/AuthenticResult";
import Brand from "@/components/Brand/Brand";
import Exciting from "@/components/Exciting/Exciting";
import MakeDecision from "@/components/MakeDecision/MakeDecision";
import Mixland from "@/components/Mixland/Mixland";
import OurCustomer from "@/components/OurCustomer/OurCustomer";
import Results from "@/components/Results/Results";

export default function Home() {
  return (
    <div className="bg-[#12141d]">
      <Brand />
      <Results />
      <AuthenticResult />
      <Exciting />
      <Mixland />
      <OurCustomer />
      <MakeDecision />
    </div>
  );
}
