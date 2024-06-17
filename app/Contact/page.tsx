import ContactCards from "../Components/ContacCard";
import ContactIntro from "../Components/ContactIntro";
import Contact from "../Components/Contactus";
import FAQSection from "../Components/Faq";


export default function page() {
  return (
    <div>
        <ContactIntro />
        <ContactCards />
        <FAQSection />
        <Contact />
    </div>
  )
}
