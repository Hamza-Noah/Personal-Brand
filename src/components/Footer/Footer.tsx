import Form from "../Form";
import Error from "../Error";
import styles from "./footer.module.scss";
import { useTranslationContext } from "../../contexts/TranslationContext";

const Footer = () => {
  const { currentLang } = useTranslationContext();

  return (
    <>
      <section className={`${styles.footer}`}>
        <div className={`container ${currentLang == "en" ? "" : "rtl"}`}>
          <div className="col-lg-6">
            <Form />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <Error />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
