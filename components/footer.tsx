import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaChevronRight, 
  FaInfoCircle, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaAngleRight,
  FaUsers 
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-[#183B4E] text-[#F5EEDC] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div>
            <h3 className="flex items-center text-lg font-semibold mb-4 text-[#DDA853]">
              <FaInfoCircle className="mr-2" /> About
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-x-2">
                <FaChevronRight className="text-[#DDA853]" />
                <span>Wallpaper E-Commerce</span>
              </li>
              <li className="flex items-center gap-x-2">
                <FaMapMarkerAlt className="text-[#DDA853]" />
                <span>Husein, Bandung, Indonesia</span>
              </li>
              <li className="flex items-center gap-x-2">
                <FaPhoneAlt className="text-[#DDA853]" />
                <span>+62 888 5621 2342</span>
              </li>
              <li className="flex items-center gap-x-2">
                <IoSend className="text-[#DDA853]" />
                <span>Angkasa@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="flex items-center text-lg font-semibold mb-4 text-[#DDA853]">
              <FaEnvelope className="mr-2" /> Information
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="flex items-center hover:text-[#DDA853]">
                  <FaAngleRight className="mr-2" /> Product
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-[#DDA853]">
                  <FaAngleRight className="mr-2" /> Blog
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-[#DDA853]">
                  <FaAngleRight className="mr-2" /> Contact
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-[#DDA853]">
                  <FaAngleRight className="mr-2" /> Help & Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="flex items-center text-lg font-semibold mb-4 text-[#DDA853]">
              <FaUsers className="mr-2" />
              Social Media
            </h3>
          
            <div className="flex space-x-3 text-xl">
              <a href="#" className="hover:text-[#DDA853]">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-[#DDA853]">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-[#DDA853]">
                <FaTwitter />
              </a>
            </div>
          </div>          
        </div>
        
        <div className="border-t border-[#27548A] mt-10"></div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-4 mb-12 text-sm">
          <div className="text-gray-400">
            ©{new Date().getFullYear()} Angkasa. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
