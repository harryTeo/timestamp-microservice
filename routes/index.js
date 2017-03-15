var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/:date', function(req, res, next) {
	var inputDate = req.params.date;
	var resDate;
	var resObject;

  if(isNaN(+inputDate)) {
    if (moment(inputDate, ["MMMM D, YYYY", "MMMM D,YYYY", "MMMM D YYYY", "MMMM-D-YYYY", "MMM D, YYYY", "MMM D,YYYY", "MMM D YYYY", "MMM-D-YYYY", "M D YYYY", "M-D-YYYY", "D M YYYY", "D-M-YYYY", "D MMMM YYYY", "D MMM YYYY", "D MMMM, YYYY", "D MMMM,YYYY", "D MMM, YYYY", "D MMM,YYYY", "D, MMM YYYY", "D,MMM YYYY", "D, MMMM YYYY", "D,MMMM YYYY", "D-MMMM-YYYY", "D-MMM-YYYY", "YYYY MMMM D", "YYYY MMM D", "YYYY-MMMM-D", "YYYY-MMM-D", "YYYY, MMMM D", "YYYY,MMMM D", "YYYY, MMM D", "YYYY,MMM D", "YYYY, M D", "YYYY,M D", "YYYY, D MMMM", "YYYY,D MMMM", "YYYY, D MMM", "YYYY,D MMM", "YYYY, D M", "YYYY,D M", "YYYY M D", "YYYY-M-D", "YYYY D M", "YYYY-D-M", "YYYY D MMM", "YYYY D MMMM", "YYYY-D-MMM", "YYYY-D-MMMM"], true).isValid()) {
      resDate = moment(inputDate, ["MMMM D, YYYY", "MMMM D,YYYY", "MMMM D YYYY", "MMMM-D-YYYY", "MMM D, YYYY", "MMM D,YYYY", "MMM D YYYY", "MMM-D-YYYY", "M D YYYY", "M-D-YYYY", "D M YYYY", "D-M-YYYY", "D MMMM YYYY", "D MMM YYYY", "D MMMM, YYYY", "D MMMM,YYYY", "D MMM, YYYY", "D MMM,YYYY", "D, MMM YYYY", "D,MMM YYYY", "D, MMMM YYYY", "D,MMMM YYYY", "D-MMMM-YYYY", "D-MMM-YYYY", "YYYY MMMM D", "YYYY MMM D", "YYYY-MMMM-D", "YYYY-MMM-D", "YYYY, MMMM D", "YYYY,MMMM D", "YYYY, MMM D", "YYYY,MMM D", "YYYY, M D", "YYYY,M D", "YYYY, D MMMM", "YYYY,D MMMM", "YYYY, D MMM", "YYYY,D MMM", "YYYY, D M", "YYYY,D M", "YYYY M D", "YYYY-M-D", "YYYY D M", "YYYY-D-M", "YYYY D MMM", "YYYY D MMMM", "YYYY-D-MMM", "YYYY-D-MMMM"]);
    }
  	else {
      resDate = moment.invalid();
    }
  } 
  else {
    resDate = moment(inputDate, "X");
  }

  if(resDate.isValid()) {
    resObject = {
      unix: Number(resDate.format("X")),
      natural: resDate.format("MMMM D, YYYY")
    };
  } 
  else {
    resObject = {
      unix: null,
      natural: null
    };
  }
  
  res.json(resObject);

});

module.exports = router;