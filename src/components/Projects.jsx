import "../scss/Projects.scss";
import projects from "../projects";
export default function Projects() {
	return (
		<section id="Projects">
			<h2>Projects</h2>
			{projects.map((proj, index) => (
				<Project {...proj} id={index + 1} key={index} />
			))}
		</section>
	);
}

const Project = ({ title, id, description, demoLink, codeLink, techStack, preview }) => {
	return (
		<div className="Project">
			<div className="project-preview">
				<div className="image">
					<img src={require(`../img/${preview}`).default} alt="" />
				</div>
			</div>
			<div className="project-info">
				<div className="title">
					<span>{("0" + id).slice(-2)}.</span> {title}
				</div>
				<div className="description">
					<div>{description}</div>
					<div className="project-links">
						<div>
							<span>Live</span>
							<span>Code</span>
						</div>
						<div>
							{techStack.map((tech, index) => (
								<span key={index}>{tech}</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
