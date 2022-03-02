import Image from "next/image";
import { useState } from "react";

import cls from "classnames";
import { motion } from "framer-motion";

import styles from './card.module.css';

const Card = (props) => {

	const { imgUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80", size = "medium" } = props;

	const [imgSrc, setImgSrc] = useState(imgUrl);

	const classMap = {
		'large': styles.lgItem,
		'medium': styles.mdItem,
		'small': styles.smItem,
	}

	const handleOnError = () => {
		console.log('hii error');
		setImgSrc("https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80")
	}
	return (
		<div className={styles.container}>
			Card
			<motion.div
				className={cls(styles.imgMotionWrapper, classMap[size])}
				whileHover={{ scale: 1.2 }}>
				<Image
					src={imgSrc}
					alt="image"
					layout="fill"
					onError={handleOnError}
					className={styles.cardImg} />
			</motion.div>
		</div>
	);
};

export default Card