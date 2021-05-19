import "../scss/about.scss";
const About = () => {
	return (
		<section id="About">
			<h2>About Me</h2>
			<p>
				Hello!
				<br />
				I am Jayesh Bhole, an undergraduate at IIIT Pune, full-stack web developer, robotics
				enthusiast, a keen reader and a fan of personal growth.
				<br />
				On the edge of my seat to learn and create new stuff.
			</p>
			<div id="skills">
				<div>
					<h3>Recent Tech Used</h3>
					<p>
						{">"} React Js <br />
						{">"} Node.Js <br />
						{">"} MongoDB <br />
						{">"} Firebase <br />
					</p>
				</div>
				<div>
					<h3>Languages</h3>
					<p>
						{">"} Javascript <br />
						{">"} Python <br />
						{">"} TypeScript <br />
						{">"} C++ <br />
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
