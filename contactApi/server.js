var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 3002; // set our port

// create our router
var router = express.Router();

// on routes that end in /bears
// ----------------------------------------------------
router.route('/contact-info')
	// get contact info (accessed at GET http://localhost:8080/api/contact-info)
	.get(function(req, res) {
        res.status(200).send({
        	email: 'cars@gmail.com',
			telephone: '0788766564'
		});
	});

// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('ContactApi listening on Port ' + port);
