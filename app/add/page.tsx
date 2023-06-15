import { addEntry } from "~/app/add/actions";

const AddPage = () => (
	<form action={addEntry}>
		<label>
			Username
			<input minLength={1} name="username" required type="text" />
		</label>
		<label>
			Text
			<input minLength={1} name="text" required type="text" />
		</label>
		<button>Submit</button>
	</form>
);

export default AddPage;
