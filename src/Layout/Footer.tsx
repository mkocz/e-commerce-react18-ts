import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FooterBlock } from "./FooterBlock";

export const Footer = () => {
  return (
    <footer className="relative top-14 flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:justify-between p-10 sm:p-16 md:px-32 2xl:px-96 text-white bg-black">
      <FooterBlock
        Icon={FaLocationDot}
        textLines={['Niezłe Ziółko', 'Zielna 1', '30-221 Warszawa']}
      />
      <FooterBlock
        Icon={FaPhone}
        textLines={['XXX XXX XXX']}
      />
      <FooterBlock
        Icon={FaEnvelope}
        textLines={['kontakt@niezleziolko.pl']}
      />
    </footer>
  );
};
