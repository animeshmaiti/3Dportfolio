import React from "react";

const Footer = () => {
  return (
    <div className="footer-2 bg-tertiary pt-6 md:pt-12">
      <div className="container px-4 mx-auto">
        <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
          <div className="footer-info lg:w-1/3 md:px-4">
            <h4 className="text-white text-2xl mb-4">
              Follow me Social Media.
            </h4>
            <p className="text-gray-400">
              I crated many projects that you can see my github profile.
            </p>
            
            <div className="mt-4">
              <a href="https://www.facebook.com/animesh.maiti.566" target="_blank" className=" bg-[#3b5998] py-2 px-4 text-white rounded mt-2 transition-colors duration-300">
                Facebook
              </a>
              <a href="https://twitter.com/AnimeshMaiti7" target="_blank" className=" bg-[#00acee] py-2 px-4 text-white rounded ml-2 mt-2 transition-colors duration-300">
                Twitter
              </a>
            </div>
          </div>

          <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
            <div className="sm:flex">
              <div className="sm:flex-1">
                <h6 className="text-base font-medium text-white uppercase mb-2">
                  Other projects
                </h6>
                <div>
                  <a href="#" className="text-gray-400 py-1 block hover:underline">
                    Company
                  </a>
                  <a href="#" className="text-gray-400 py-1 block hover:underline">
                    Culture
                  </a>
                  <a href="#" className="text-gray-400 py-1 block hover:underline">
                    Team
                  </a>
                  <a href="#" className="text-gray-400 py-1 block hover:underline">
                    Careers
                  </a>
                </div>
              </div>
              <div className="sm:flex-1 mt-4 sm:mt-0">
                <h6 className="text-base font-medium text-white uppercase mb-2">
                  Connect with me
                </h6>
                <div>
                  <a href="https://discordapp.com/users/714329492968964147" target="_blank" className="text-gray-400 py-1 block hover:underline">
                    Discord
                  </a>
                  <a href="https://github.com/animeshmaiti" target="_blank" className="text-gray-400 py-1 block hover:underline">
                    GitHub
                  </a>
                  <a href="https://www.instagram.com/maiti_animesh/" target="_blank" className="text-gray-400 py-1 block hover:underline">
                    Instagram
                  </a>
                  <a href="https://www.linkedin.com/in/animesh-maiti-3a2164171/" target="_blank" className="text-gray-400 py-1 block hover:underline">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
            <h5 className="text-lg text-white font-medium mb-4">
              Explore the World
            </h5>
            <button className="bg-indigo-600 text-white hover:bg-indigo-700 rounded py-2 px-6 md:px-12 transition-colors duration-300">
              Explore
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-solid border-gray-900 mt-4 py-4">
        <div className="container px-4 mx-auto">
          <div className="md:flex md:-mx-4 md:items-center">
            <div className="md:flex-1 md:px-4 text-center md:text-left">
            <p className="footer_copy">&#169; Animesh. All rights reserved</p>
            </div>
            <div className="md:flex-1 md:px-4 text-center md:text-right">
              <a
                href="https://animeshmaiti.github.io/GamingWebPage/assets/html/terms_of_use.html" target="_blank"
                className="py-2 px-4 text-white inline-block hover:underline"
              >
                Terms of Use
              </a>
              <a
                href="https://animeshmaiti.github.io/GamingWebPage/assets/html/privacy-policy.html" target="_blank"
                className="py-2 px-4 text-white inline-block hover:underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
