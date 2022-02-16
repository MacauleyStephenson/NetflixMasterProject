const Banner = (props) => {
	const { title, subTitle, imgurl } = props;

	return <div>
		<h3>{title}</h3>
		<h3>{subTitle}</h3>
		<div style={{ backgroundImage: imgurl }}></div>
	</div>
};

export default Banner;