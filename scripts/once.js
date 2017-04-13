export default function(f) {
	let called = false;
	return function() {
		if (!called) {
			called = true;
			f.apply(this, arguments);
		}
	};
}