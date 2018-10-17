const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.reddit.com';

puppeteer
    .launch()
    .then(function(browser){
        return browser.newPage();
        console.log('1');
    })
    .then(function(page){
        return page.goto(url).then(function(){
            return page.content();
            console.log("2");
        });
    })
    .then(function(html){
        $('h2', html).each(function(){
            console.log($(this).text());
        })
    })
    .catch(function(err){
        console.log(err);
    });
