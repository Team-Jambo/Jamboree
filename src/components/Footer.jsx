import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-72vh w-max-full bg-black flex flex-row leading-7 p-6  gap-x-44 hover:underline ">
      <div className="flex flex-col text-white ">
        <h2
          style={{ fontFamily: "Fantasy, sans-serif" }}
          className="pb-3 italic"
        >
          Use Jamboree
        </h2>
        <span>
          <Link> Pricing Event </Link>
        </span>
        <span>
          <Link> Event Registration </Link>
        </span>
        <span>
          <Link>Jamboree Mobile </Link>
        </span>
        <span>
          <Link> Jamboree Ticket App </Link>
        </span>
        <span>
          <Link>Jamboree Check-In App </Link>
        </span>
        <span>
          <Link> FAQs </Link>
        </span>
        <span>
          <Link> Sitemap </Link>
        </span>
        <span className="pt-8">© 2024 Jamboree Event </span>
      </div>

      <div className="flex flex-col text-white">
        <h2
          style={{ fontFamily: "Fantasy, sans-serif" }}
          className="pb-3 italic"
        >
          Plan Events
        </h2>
        <span>
          <Link> Event Planning</Link>
        </span>
        <span>
          <Link> Post your event online</Link>
        </span>
        <span>
          <Link>Event Payment System </Link>
        </span>
        <span>
          <Link> Event Management Software</Link>
        </span>
        <span>
          <Link> Halloween Party Planning</Link>
        </span>
        <span>
          <Link>Virtual Events Platform</Link>
        </span>
        <span>
          <Link> QR Codes for Event Check-In</Link>
        </span>
      </div>

      <div className="flex flex-col text-white ">
        <h2
          style={{ fontFamily: "Fantasy, sans-serif" }}
          className="pb-3 italic"
        >
          Find Events
        </h2>
        <span>
          <Link>Upcoming Events</Link>
        </span>
        <span>
          <Link>Citadel Music Concert 2024</Link>
        </span>
        <span>
          <Link> Rapperholic Concert 2023</Link>
        </span>
        <span>
          <Link>Afrochella 2023</Link>
        </span>
      </div>

      <div className="flex flex-col text-white">
        <h2
          style={{ fontFamily: "Fantasy, sans-serif" }}
          className="pb-3 italic"
        >
          Connect With Us
        </h2>

        <div className="flex items-center">
          <MailIcon className="h-4 mr-1" />
          <span className="ml-1"> Contact Support</span>
        </div>
        <div className="flex items-center">
          <FacebookIcon className="h-4 mr-1" />
          <span className="ml-1"> Facebook </span>
        </div>

        <div className="flex items-center">
          <TwitterIcon className="h-4 mr-1" />
          <span className="ml-1"> Twitter </span>
        </div>
        <div className="flex items-center">
          <LinkedinIcon className="h-4 mr-1" />
          <span className="ml-1"> LiknkedIn</span>
        </div>
        <div className="flex items-center">
          <InstagramIcon className="h-4 mr-1" />
          <span className="ml-1"> Instagram </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
