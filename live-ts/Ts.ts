import superAgent from 'superagent'
import cheerio from 'cheerio'
class Reptiles {
  private url = 'https://www.jdlingyu.com/'
  private content: string = ''
  constructor() {
    this.getHtml()
  }
  async getHtml() {
    const res = await superAgent.get(this.url)
    const $ = cheerio.load(res.text)
    const imgs = $('img')
    const urls = []
    imgs.map((item) => {
      console.log(imgs[item].attribs.src)
      urls.push(imgs[item].attribs.src)
    })
    this.content = res.text
  }
}

new Reptiles()
