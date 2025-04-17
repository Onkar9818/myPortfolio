import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <a href="https://www.instagram.com/fitwithonkar/" target="_blank">What I do Other Than Coding</a>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg) => (
              <a className="icon" target="_blank" href={socialImg.url} key={socialImg.url}>
              <img src={socialImg.imgPath} alt="social icon" />
              </a>
            
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Onkar Savaratkar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;