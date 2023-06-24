import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-col justify-start flex-1 my-10">
          <img
            src={logo}
            alt="hoobank logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] flex-wrap w-full flex flex-row justify-between mt-10 md:mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium leading-[27px] text-white text-[18px]">
                {footerlink.title}
              </h4>
              <ul className="mt-4 list-none">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins text-center font-medium leading-[27px] text-white text-[18px]">
          @Copyright 2023 HooBank . Studied from "JSM" with ❤ by PRAKASH{" "}
        </p>
        <div className="flex flex-row mt-6 md:mt-0">
          {socialMedia.map((social, index) => (
            <img
              src={social.icon}
              alt={social.id}
              key={social.id}
              className={`${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              } w-[21px] h-[21px] object-contain cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
