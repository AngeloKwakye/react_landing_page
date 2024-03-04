import styles from "../header/index.module.css"
import headerImage from "../../assets/421825367_932187885143671_240639697498081366_n.png"
import microsoft from "../../assets/3GrnTWsZLlK.png"


function Header() {
    return (
        <section className={styles.new_item}>
        <div>
          <div>
            <h3>Download AgroMart</h3>
            <p>Use AgroMart across your devices.</p>
            <p>By installing WhatsApp, you agree to our Terms & Privacy Policy.</p>
          </div>
          <div className={styles.headerIntro}>
            <div>
            <p>Windows <br/> <span className={styles.introtxt}>Desktop</span> </p>
            {/* <h2></h2> */}
            <p>Requires Windows 10 or newer. For all other operating systems, you can use <span><u>WhatsApp Web.</u></span></p>
            <img className={styles.microsoftImg} src={microsoft} alt="microsoft" />
            </div>
          </div>
        </div>
  
        <div>
          <img src={headerImage} alt="pc image" />
        </div>
      </section>
    )
}

export default Header;