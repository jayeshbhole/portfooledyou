import "../scss/Contact.scss";
import { useForm } from "react-hook-form";

const Contact = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const message = watch("message");
	const onSubmit = (data) => {
		
	};

	return (
		<section id="Contact">
			<h2>Contact Me</h2>
			<div className="social">
				<h3>Find What I am Up To</h3>
			</div>
			<div className="form">
				<h3>Drop A Quick Mail</h3>
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
