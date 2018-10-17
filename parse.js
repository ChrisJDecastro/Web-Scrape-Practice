const rp = require('request-promise');
const $ = require('cheerio');
//const url = 'https://en.wikipedia.org/wiki/George_Washington';

const parse = function (url) {
    return rp(url)
        .then(function (html) {
            return {
                name: $('.firstHeading', html).text(),
                birthday: $('.bday', html).text(),
            };
        })
        .catch(function(err){

        });
};

module.exports = parse;