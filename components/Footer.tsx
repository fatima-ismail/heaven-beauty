import Image from "next/image";
import { assets, contact } from "@/lib/content";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__clouds" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="footer__inner">
        <h2 className="footer__brand">- Heaven Beauty -</h2>
        <div className="footer__columns">
          <div>
            <h3>Links</h3>
            <a href="#top">Home</a>
            <a href="#story">About</a>
            <a href="#shop">Store</a>
          </div>
          <div>
            <h3>Care</h3>
            <a href="/return">Return</a>
            <a href="/faq">FAQ</a>
            <a href="/order-track">Track order</a>
          </div>
          <div>
            <h3>Contact us</h3>
            <a href="mailto:service@myheavenbeauty.com">
              <Image src={assets.mail} alt="Mail" width={20} height={20} />
              service@myheavenbeauty.com
            </a>
            <a href={`tel:${contact.phoneE164}`}>
              <Image src={assets.phone} alt="Phone" width={20} height={20} />
              {contact.phoneDisplay}
            </a>
            <a href="https://instagram.com/heavenbeauty.lb">
              <Image src={assets.instagram} alt="Instagram" width={20} height={20} />
              @heavenbeauty.lb
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
