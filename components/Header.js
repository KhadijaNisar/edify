import { BiLogoFacebook } from "react-icons/bi";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineClockCircle,
} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Header.module.css";

const Header = () => {
  return (
    <>
      <div className="headerOuter">
      <div className="outerDiv">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <AiOutlineClockCircle></AiOutlineClockCircle>
            <span>10:30 AM To 6:30 PM | Saturday, Sunday Off</span>
          </div>
          <div className={styles.headerRight}>
            <Link href={'https://www.facebook.com/EdifyGroupPakistan'}><BiLogoFacebook></BiLogoFacebook></Link>
            <Link href={'https://www.instagram.com/edifygroupofficial/'}><AiOutlineInstagram></AiOutlineInstagram></Link>
            <Link href={'https://www.linkedin.com/company/edify-group-of-companies/?viewAsMember=true'}><AiOutlineLinkedin></AiOutlineLinkedin></Link>
            <Link href={'https://www.youtube.com/channel/UC144UJCe4YfW0NZJS1twcTg'}><AiOutlineYoutube></AiOutlineYoutube></Link>
          </div>
        </div>
      </div>
      </div>
      {/* <div className="outerDiv">
        <Image src={'/image/logo.png'} height={200} width={200} alt="logo"></Image>
        <div>
            <ul>
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'/'}><li>Services</li></Link>
                <Link href={'/'}><li>Destinations
                    </li></Link>
            </ul>
        </div>
      </div> */}
    </>
  );
};

export default Header;
