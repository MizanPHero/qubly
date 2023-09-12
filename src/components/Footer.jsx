import logo from '../img/logo2.svg';
import facebookIcon from '../icon/facebook.svg';
import twitterIcon from '../icon/twitter.svg';
import instagramIcon from '../icon/instagram.svg';

const Footer = () => {
    return ( 
        <div className="container px-4 pt-10 pb-5 my-10 md:my-24 md:px-10">
            <div className="flex flex-col-reverse items-start justify-start md:flex-row">
                <div className="w-full pr-5 md:w-3/12">
                    <img src={logo} alt="Qubly" className="mb-2 mx-auto md:mx-0 w-[70px]" />
                    <p className="text-sm font-medium text-center text-primary-200 md:text-left">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim ad minim
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center justify-center mt-3 md:justify-start">
                        <img src={facebookIcon} alt="Facebook" className="w-6 mx-4 cursor-pointer md:mx-0 md:mr-4" />
                        <img src={twitterIcon} alt="Twitter" className="w-6 mx-4 cursor-pointer md:mx-0 md:mr-4" />
                        <img src={instagramIcon} alt="Instagram" className="w-6 mx-4 cursor-pointer md:mx-0 md:mr-4" />
                    </div>
                </div>
                <div className="hidden w-2/12 md:block">
                    <h2 className="foot-title">
                        Product
                    </h2>
                    <ul className="text-sm font-medium">
                        {['Connections', 'Protocols', 'Personas', 'Integrations', 'Catalog', 'Pricing', 'Security', 'GDPR'].map((item, index) => (
                            <li key={index} className="my-2 cursor-pointer">
                                { item }
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden w-2/12 md:block">
                    <h2 className="foot-title">
                        For Developers
                    </h2>
                    <ul className="text-sm font-medium">
                        {['Docs', 'API', 'Open Source', 'Engineering Team'].map((item, index) => (
                            <li key={index} className="my-2 cursor-pointer">
                                { item }
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden w-2/12  md:block">
                    <h2 className="foot-title">
                        Company
                    </h2>
                    <ul className="text-sm font-medium">
                        {['Careers', 'Blog', 'Press'].map((item, index) => (
                            <li key={index} className="my-2 cursor-pointer">
                                { item }
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden w-2/12 md:block">
                    <h2 className="foot-title">
                        Support
                    </h2>
                    <ul className="text-sm font-medium">
                        {['Help Center', 'Contact Us', 'Security Bulletins', 'Documentation', 'Partner Portal'].map((item, index) => (
                            <li key={index} className="my-2 cursor-pointer">
                                { item }
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:w-3/12">
                    <h2 className="foot-title">
                        Newsletter
                    </h2>
                    <div className="relative mb-10">
                        <input 
                            type="email" 
                            className="w-full p-3 border rounded shadow-lg outline-none border-secondary-100"
                            placeholder="Email"
                        />
                        <svg className="absolute top-0 right-0 m-3 rounded-full" xmlns="http://www.w3.org/2000/svg" width="28.01" height="28.01" viewBox="0 0 28.01 28.01">
                            <path id="Icon_ionic-ios-send" data-name="Icon ionic-ios-send" d="M23.686,4.547,4.748,12.8a.434.434,0,0,0,.015.789l5.123,2.894a.826.826,0,0,0,.944-.093l10.1-8.708c.067-.057.227-.165.289-.1s-.036.222-.093.289l-8.739,9.843a.823.823,0,0,0-.083.985l3.348,5.37a.436.436,0,0,0,.784-.01L24.268,5.12A.434.434,0,0,0,23.686,4.547Z" transform="translate(14.005 -6.368) rotate(45)" fill="#722ed1"/>
                        </svg>
                    </div>
                </div>
            </div>

            
        </div>
     );
}
 
export default Footer;