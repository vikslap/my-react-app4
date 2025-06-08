
import styles from "./userprofile.module.css";
import LikeButton from "../likeButton/likeButton";



export default function UserProfile(props){

  const { firstName ="Not added", lastName = "Not added", skills = "Not added" } = props;

  return (
  <>
    <section>
      <ul className={`${styles.userDetails} ${styles.border}`}>
        <li>First Name: {firstName}</li>
        <li>Last Name: {lastName}</li>
        <li>Skills: {skills}</li>
      </ul>
      <LikeButton />
    </section>
  </>
  );
}