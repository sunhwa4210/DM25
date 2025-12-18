import "./Footer.css";
import FooterTitle from "../assets/footer/title_footer.png";
import FooterInstar from "../assets/footer/instar.png";
import FooterSchool from "../assets/footer/school.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* LEFT */}
        <div className="footer-left">
          <div className="footer-toprow">
            <img className="footer-title" src={FooterTitle} alt="(NULL) is not Empty" />
            <a
              className="footer-instaLink"
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img className="footer-insta" src={FooterInstar} alt="Instagram" />
            </a>
          </div>

          <p className="footer-text">
            서울여자대학교 디지털미디어학과 제8회 졸업전시회 <br />
            ⓒCopyright 2025. DMDA all rights reserved.
          </p>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <img className="footer-school" src={FooterSchool} alt="서울여자대학교" />
        </div>
      </div>
    </footer>
  );
}
