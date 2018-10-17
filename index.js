const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
const $ = require('cheerio');
const parse = require('./parse');

rp(url)
    .then(function(html){
        //console.log(html);
        //console.log($('big > a',html.length));
        //console.log($('big > a',html));
        const wikiUrls = [];
        for(let i = 0;i < 45;i++){
            wikiUrls.push($('big > a',html)[i].attribs.href);
        }
        //console.log(wikiUrls);
        return Promise.all(
            wikiUrls.map(function(url){
                return parse('https://en.wikipedia.org' + url);
            })
        );
    })
    .then(function(pres){
        console.log(pres);
    })
    .catch(function(err){
        console.log(err);
    });