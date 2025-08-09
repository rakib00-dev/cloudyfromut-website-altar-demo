import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const fooerLink = [
    {
      linkTitle: 'Alumni Network',
      link: 'https://www.rothschildandco.com/en/alumni-network/',
    },
    {
      linkTitle: 'Contact us',
      link: 'https://www.rothschildandco.com/en/contact-us/',
    },
    {
      linkTitle: 'Data Privacy Notice',
      link: 'https://www.rothschildandco.com/en/data-privacy-notice/',
    },
    {
      linkTitle: 'Legal and regulatory',
      link: 'https://www.rothschildandco.com/en/legal-information/',
    },
    {
      linkTitle: 'Modern Slavery Act Statement',
      link: 'https://www.rothschildandco.com/en/legal/modern-slavery-statement/',
    },
    {
      linkTitle: 'The NMR Pension Fund',
      link: 'https://www.rothschildandco.com/en/legal/nmr-pension-fund/',
    },
    {
      linkTitle: 'Regulated information',
      link: 'https://www.rothschildandco.com/en/newsroom/financial-reports/',
    },
    {
      linkTitle: 'Site map',
      link: 'https://www.rothschildandco.com/en/site-map/',
    },
    {
      linkTitle: 'Simplified tender offer filed by Concordia',
      link: 'https://www.rothschildandco.com/en/simplified-tender-offer-filed-by-concordia/',
    },
    {
      linkTitle: 'Cookie Settings',
      link: '',
    },
  ];
  return (
    <footer className="max-w-7xl mx-auto w-full bg-[#1c355e] text-white">
      <div className="grid md:grid-cols-2 w-full px-4 pt-15 pb-5 md:pb-15 md:px-25">
        <div className="grid md:grid-cols-2 gap-6 md:gap-20">
          <div className="grid gap-6">
            {fooerLink.slice(0, 5).map((e) => (
              <div className="" key={e.link}>
                <a
                  href={e.link}
                  target="_blank"
                  className="w-full text-md text-gray-200 linkAnimation"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  {e.linkTitle}
                </a>
              </div>
            ))}
          </div>
          <div className="grid gap-6">
            {fooerLink.slice(5, 10).map((e) => (
              <div key={e.link}>
                <a
                  href={e.link}
                  target="_blank"
                  className="w-full text-md text-gray-200"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  {e.linkTitle}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex md:justify-end mt-12 md:mt-0 gap-8">
          <a
            href=""
            target="_blank"
            className="transition-all duration-300 w-fit h-fit p-2 hover:text-[#cc9f53]"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
          <a
            href=""
            target="_blank"
            className="transition-all duration-300 w-fit h-fit p-2 hover:text-[#cc9f53]"
          >
            <FaLinkedinIn className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="grid w-full px-4 py-8 md:text-end md:px-25 bg-[#162a4b]">
        <span className="text-sm">
          {new Date().getFullYear()} Rothschild & Co ©
        </span>
      </div>
    </footer>
  );
};

export default Footer;
