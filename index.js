const puppeteer = require('puppeteer');
const $ = require('cheerio');
const nodemailer = require('nodemailer');

async function firststep () {
    const browser = await puppeteer.launch({headless: false});
    const page =  await browser.newPage()
    await page.goto("https://my.xfinity.com/");

    await page.click('button[class = "xc-header--hamburger"]');
    await page.click('a[href="https://customer.xfinity.com/#"]');
    await page.waitForNavigation({waitUntil : 'load'})
    await page.type("#user","vibhavddd1234@gmail.com") ;
    await page.click('button[class = "submit"]');
    return page;
    //await browser.close();
};
async function check(page) {
    const html = await page.evaluate(() =>{
    const pagetag = document.querySelector('.error_message');
    return pagetag.innerText;

    })
    var invalid = html;
    if(invalid == 'The Xfinity ID or password you entered was incorrect. Please try again.'){
        console.log("invalid statement by user");
        
        
    }
   
}

async function monitor() {
    let page = await firststep();
    await page.waitForNavigation({waitUntil : 'load'})
    await check(page);
}

monitor();

// for doing the same without using navigation fuction one can timeout it for 10 to 20 seconds and use deifferent fuction for insted of some to write username in that//