require('dotenv').config()

const puppeteer = require('puppeteer')

const usernameInputEl = '#username'
const passwordInputEl = '#password'

const createInstanceTitleEl = '#__next > div > div > div.jss84 > main > div > div.jss60 > div.jss285.jss308.jss304 > div.jss286.jss63 > div > p'

const auth = {
  username: 'watwat',
  password: 'watwat'
}

const launchConfig = {
  headless: process.env.NODE_ENV === 'development',
  slowMo: 100,
  defaultViewport: {
    width: 1280,
    height: 800
  }
}

const run = async () => {
  try {

    const browser = await puppeteer.launch(launchConfig)
    const page = await browser.newPage()
    await page.goto(process.env.PUP_TARGET_URL)

    await page.type(usernameInputEl, auth.username)
    await page.type(passwordInputEl, auth.password)
    await page.type(passwordInputEl, String.fromCharCode(13))

    await page.waitFor(createInstanceTitleEl)

    const instanceTitleText = await page.evaluate(() => {
      return document.querySelector('#__next > div > div > div.jss84 > main > div > div.jss60 > div.jss285.jss308.jss304 > div.jss286.jss63 > div > p').innerHTML
    })

    console.log('instanceTitleText', instanceTitleText);

    await page.evaluate(() => {
      alert(`You have been signed in by me, a robot`)
    })

    await browser.close()
  } catch (err) {
    console.log(err)
  }
}

run()
