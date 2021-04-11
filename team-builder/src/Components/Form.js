import React from 'react';

const Form = props => {
	const { handleChange, handleSubmit } = props;

	return (
		<div className="form-container">
			<form onSubmit={event => handleSubmit(event)}>
				<label>
					Name:
					<input type="text" name="name" value={member.name} onChange={event => handleChange(event)} />
				</label>
				<label>
					Email:
					<input type="text" name="email" value={member.email} onChange={event => handleChange(event)} />
				</label>
				<label>
					Role:
					<input type="text" name="role" value={member.role} onChange={event => handleChange(event)} />
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
};
export default Form;
