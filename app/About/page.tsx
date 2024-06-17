import CompanyIntro from "../Components/CompanyIntro";
import Contact from "../Components/Contactus";
import InfiniteMovingCardsDemo from "../Components/OurClients";
import MyTeam from "../Components/OurTeam";
import OurTeam from "../Components/OurTeam";
import CompanyFounders from "../Components/OwnerMessage";
import GlobeDemo from "../Components/WeService";
import Workflows from "../Components/Workflows";
import { World } from "../ui/global";

export default function page() {
  return (
    <div className="pt-16">
      <CompanyIntro />
      <GlobeDemo />
      <InfiniteMovingCardsDemo/>
      <Workflows />
      <CompanyFounders />
      <MyTeam/>
      <Contact />
      </div>
  )
}
