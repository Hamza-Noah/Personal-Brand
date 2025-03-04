import Form from "../Form";
import Error from "../Error";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <section className={`${styles.footer}`}>
        <div className="container">
          <div className="col-lg-7">
            <Form />
          </div>
          <div className="col-lg-5">
            <Error />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
