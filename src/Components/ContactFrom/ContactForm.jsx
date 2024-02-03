import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
const ContactForm = () => {
	return (
		<section className={styles.container}>
			<div className={styles.contact_form}>
				<div className={styles.top_btn}>
					<Button
						icon={<MdOutlineMessage fontSize={"24px"} />}
						text={"VIA SUPPORT CHAT"}
					/>
					<Button icon={<IoIosCall fontSize={"24px"} />} text={"VIA CALL"} />
				</div>
				<Button
					isOutline={true}
					icon={<MdOutlineMessage fontSize={"24px"} />}
					text={"VIA EMAIL FORM"}
				/>
				<form action="#">
					<div className={styles.form_layout}>
						<label htmlFor="name">Name</label>
						<input type="text" name="name" />
					</div>
					<div className={styles.form_layout}>
						<label htmlFor="email">E-mail</label>
						<input type="email" name="email" />
					</div>
					<div className={styles.form_layout}>
						<label htmlFor="text">Message</label>
						<textarea name="text" rows={8}></textarea>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "end",
						}}
					>
						<Button text={"SUBMIT"} />
					</div>
				</form>
			</div>
			<div className={styles.contact_image}>
				<img src="/images/contact.png"></img>
			</div>
		</section>
	);
};

export default ContactForm;
