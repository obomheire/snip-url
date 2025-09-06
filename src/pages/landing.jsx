import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };

  return (
    <div className="flex flex-col items-center">
      {/* <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        One short link <br /> endless possibilities
      </h2> */}
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        <span className="text-green-500">One short link </span><br />
        endless possibilities
      </h2>
      <form
        onSubmit={handleShorten}
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
      >
        <Input
          type="url"
          placeholder="Enter long URL here"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="h-full flex-1 py-4 px-4"
        />
        <Button 
          type="submit" 
          className="h-full bg-green-600 hover:bg-green-700 text-white"
          >
        Shorten!
        </Button>
      </form>
      <img
        src="/banner1.jpeg" // replace with 2 in small screens
        className="w-full my-11 md:px-11"
      />
      <Accordion type="multiple" collapsible className="w-full md:px-11">
    <AccordionItem value="item-5">
    <AccordionTrigger>
      Is SnipURL free to use?
    </AccordionTrigger>
    <AccordionContent>
      Yes! SnipURL is completely free to use with all features included, no hidden
      costs or upgrades required.
    </AccordionContent>
        </AccordionItem>
        
    <AccordionItem value="item-2">
    <AccordionTrigger>
      Do I need an account to use SnipURL?
    </AccordionTrigger>
    <AccordionContent>
      Yes, signing up gives you full access to manage your links, track
      performance, and personalize your shortened URLs.
    </AccordionContent>
    </AccordionItem>
        
    <AccordionItem value="item-1">
    <AccordionTrigger>
      How does the SnipURL work?
    </AccordionTrigger>
    <AccordionContent>
      Simply paste in your long link, and SnipURL instantly creates a shorter,
      cleaner version. When someone clicks your short link, they’re redirected
      straight to the original full URL.
    </AccordionContent>
        </AccordionItem>
        
    <AccordionItem value="item-4">
    <AccordionTrigger>
      Can I customize my short URLs?
    </AccordionTrigger>
    <AccordionContent>
      Absolutely! You can create branded short links that are easy to remember
      and share, making your links look more professional.
    </AccordionContent>
    </AccordionItem>

  <AccordionItem value="item-3">
    <AccordionTrigger>
      What kind of analytics can I see for my links?
    </AccordionTrigger>
    <AccordionContent>
      You’ll get detailed insights including total clicks, visitor locations,
      and whether your audience used mobile or desktop devices.
    </AccordionContent>
  </AccordionItem>
</Accordion>
 
    </div>
  );
};

export default LandingPage;
