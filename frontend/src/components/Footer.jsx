
"use client";

import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router";

export function MyFooter() {
  return (
    <Footer container>
      <div className="w-full ">
        <div className="flex flex-wrap justify-between">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Shoppee"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 md:grid-cols-4 sm:gap-6">
            <div>
              <Footer.Title title="Learn More" className="text-black"  />
              <Footer.LinkGroup col>
                <Footer.Link as={Link} to={'/'}>Flowbite</Footer.Link>
                <Footer.Link as={Link} to={'/'}>Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Our Community" className="text-black"  />
              <Footer.LinkGroup col>
                <Footer.Link as={Link} to={'/'}>Github</Footer.Link>
                <Footer.Link as={Link} to={'/'}>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact Us" className="text-black" />
              <Footer.LinkGroup col>
                <Footer.Link as={Link} to={'/'}>Privacy Policy</Footer.Link>
                <Footer.Link as={Link} to={'/'}>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon as={Link} to={'/'} icon={BsFacebook} />
            <Footer.Icon as={Link} to={'/'} icon={BsInstagram} />
            <Footer.Icon as={Link} to={'/'} icon={BsTwitter} />
            <Footer.Icon as={Link} to={'/'} icon={BsGithub} />
            <Footer.Icon as={Link} to={'/'} icon={BsDribbble} />
          </div>
          </div>
        </div>
        <Footer.Divider className="w-[90%]" />
        <div className="w-full flex items-center justify-center">
          <Footer.Copyright as={Link} to={'/'} by="Shopee | All rights reserved" year={2024} />
        </div>
      </div>
    </Footer>
  );
}
