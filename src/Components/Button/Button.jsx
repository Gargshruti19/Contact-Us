import styles from "./Button.module.css";

const Button = (props) => {
	// eslint-disable-next-line react/prop-types
	const { isOutline, icon, text } = props;
	return (
		<button className={isOutline ? styles.secondary_btn : styles.primary_btn}>
			{icon} {text}
		</button>
	);
};

export default Button;
