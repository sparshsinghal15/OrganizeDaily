const express = require('express'),
	path = require('path');
(cors = require('cors')), (app = express());

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send('hello');
});

// serve static products if in production
if (process.env.NODE_ENV === 'production') {
	// set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`server has started on port ${port}`);
});
