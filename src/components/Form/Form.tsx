import styles from "./form.module.scss";
import form from "../../assets/image/form.svg";

const Form = () => {
  return (
    <>
      <form action="">
        <div className={`${styles.header} d-flex justify-content-between`}>
          <h3>
            Wanna Connect
            <span className="ps-3">&gt;/</span>
          </h3>
          <div className="buttons">
            <button type="button" className={styles.minimize}></button>
            <button type="button" className={styles.close}></button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
