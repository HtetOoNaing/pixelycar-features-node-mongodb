const Country = require("../models/Country")

exports.addManyCountries = (req, res) => {
	const countries = req.body.countries
	countries.map(country => {
		Country.findOneAndUpdate({code: country.code}, {code: country.code, name: country.name, status: 'updated'}, { upsert: true, new: true, setDefaultsOnInsert: true }, (error, result) => {
			if(error) {
				console.log(error);
				return res.status(500).json({error})
			}
		})
	})

	res.status(200).json({
		message: 'Successfully inserted'
	})
}