
import styles from "./userprofile.module.css"


export default function UserProfile(){
  return (
  <>
    <section>
      <ul className={`${styles.userDetails} ${styles.border}`}>
        <li>First Name: John</li>
        <li>Last Name: Doe</li>
        <li>Skills: React, JavasScript</li>
      </ul>
    </section>
  </>
  );
}