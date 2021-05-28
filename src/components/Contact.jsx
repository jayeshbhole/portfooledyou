import "../scss/Contact.scss";
import { useForm } from "react-hook-form";
import {
	RiInstagramLine,
	RiMediumFill,
	RiGithubLine,
	RiMailOpenLine,
	RiLinkedinFill,
} from "react-icons/ri";

const Contact = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const message = watch("message");
	const onSubmit = (data) => {};

	return (
		<section id="Contact">
			<h2>Contact Me</h2>
			<h3>Find Me Here</h3>

			<div className="social">
				<a target="blank" href="https://github.com/jayeshbhole">
					<div className="item">
						<RiGithubLine /> <span>GitHub</span>
					</div>
				</a>
				<a target="blank" href="https://www.linkedin.com/in/jayesh-bhole-701086193/">
					<div className="item">
						<RiLinkedinFill /> <span>LinkedIn</span>
					</div>
				</a>
				<a target="blank" href="https://medium.com/@jayeshbhole123">
					<div className="item">
						<RiMediumFill /> <span>Medium</span>
					</div>
				</a>
				<a target="blank" href="mailto:jayeshbhole123@gmail.com">
					<div className="item">
						<RiMailOpenLine /> <span>Mail</span>
					</div>
				</a>
				<a target="blank" href="https://instagram.com/jayeshbhole_">
					<div className="item">
						<RiInstagramLine /> <span>Instagram</span>
					</div>
				</a>
			</div>
			<br />
			<br />
			<h3>Or Drop a Quick Mail</h3>
			<div className="form">
				<form onSubmit={handleSubmit(onSubmit)}>
					<label>
						Name&nbsp; {errors.name && <span className="error">Required</span>}
						<input
							placeholder="Jane Doe"
							aria-invalid={errors.name ? "true" : "false"}
							{...register("name", { required: true, minLength: 3 })}
						/>
					</label>
					<label>
						Email&nbsp; {errors.email && <span className="error">Required</span>}
						<input
							type="email"
							placeholder="jane.doe@email.com"
							aria-invalid={errors.email ? "true" : "false"}
							{...register("email", { required: true })}
						/>
					</label>
					<label>
						Your Message&nbsp;{" "}
						{errors.message?.type === "required" && (
							<span className="error">Required</span>
						)}
						{errors.message?.type === "maxLength" && (
							<span className="error">Max Length Exceeded</span>
						)}
						<textarea
							placeholder="👋  Hello"
							{...register("message", {
								required: true,
								minLength: 5,
								maxLength: 1000,
							})}
							aria-invalid={errors.message ? "true" : "false"}
						/>
					</label>
					<br />
					<input type="submit" value="Send Message" />
				</form>
			</div>
		</section>
	);
};
export default Contact;
