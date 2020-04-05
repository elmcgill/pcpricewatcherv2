import scraper from './scraper';

(async () => {
    const scrape = new scraper();
    const page = await scrape.init();

    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.nytimes.com/')
    await page.screenshot({ path: 'nytimes.png', fullPage: true })
    await browser.close()
});


