import React from 'react'
import './style.sass'
import Card from './Card'
const SHOW_CARD = 2000

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      cards: [
        'http://balitangviral.com/wp-content/uploads/2015/09/Super-Mario-08.png',
        'http://vignette2.wikia.nocookie.net/mario/images/4/4b/3dworldmushroom.png/revision/latest?cb=20131129214443',
        'http://gbamedia.gamespy.com/gba/image/article/706/706420/new-super-mario-bros-20060509034343471_640w.jpg',
        'http://www.mariowiki.com/images/thumb/5/55/Luigi_Artwork_-_Super_Mario_3D_World.png/200px-Luigi_Artwork_-_Super_Mario_3D_World.png',
        'https://upload.wikimedia.org/wikipedia/en/e/ec/Bowser_-_New_Super_Mario_Bros_2.png',
        'http://vignette2.wikia.nocookie.net/nintendo/images/d/de/Princess_Peach_(Fortune_Street).png/revision/latest?cb=20130625131449&path-prefix=en',
        'http://vignette2.wikia.nocookie.net/nintendo/images/4/48/Yoshi.png/revision/latest?cb=20140214234810&path-prefix=en',
        'http://ges-sa.com/wp-content/uploads/2015/05/Puzzle-Dragons-Z-Puzzle-Dragons-Super-Mario-Bros.-Edition-art.jpg',
        'https://sickr.files.wordpress.com/2012/08/koopalings_new_super_mario_bros-_2.png',
        'http://vignette3.wikia.nocookie.net/mario/images/7/78/Tanooki_Mario_Artwork_-_Super_Mario_Bros._3.png/revision/latest?cb=20120518002849',
        'http://img03.deviantart.net/cfa9/i/2012/343/9/9/new_super_mario_bros__u__wendy_o__koopa_by_legend_tony980-d5nkcdj.png',
        'http://img01.deviantart.net/1971/i/2012/268/9/c/new_super_mario_bros__u__bowser_jr__by_legend_tony980-d5fu8ht.png',
        'http://www.within-temptation.com/wp-content/uploads/2010/12/mario1.jpg',
        'https://upload.wikimedia.org/wikipedia/en/7/75/Koopa_Troopa_3D_Land.png',
        'http://i.imgur.com/QfJ0F98.png',
        'https://upload.wikimedia.org/wikipedia/en/d/d1/Toad_3D_Land.png',
        'http://balitangviral.com/wp-content/uploads/2015/09/Super-Mario-08.png',
        'http://vignette2.wikia.nocookie.net/mario/images/4/4b/3dworldmushroom.png/revision/latest?cb=20131129214443',
        'http://gbamedia.gamespy.com/gba/image/article/706/706420/new-super-mario-bros-20060509034343471_640w.jpg',
        'http://www.mariowiki.com/images/thumb/5/55/Luigi_Artwork_-_Super_Mario_3D_World.png/200px-Luigi_Artwork_-_Super_Mario_3D_World.png',
        'https://upload.wikimedia.org/wikipedia/en/e/ec/Bowser_-_New_Super_Mario_Bros_2.png',
        'http://vignette2.wikia.nocookie.net/nintendo/images/d/de/Princess_Peach_(Fortune_Street).png/revision/latest?cb=20130625131449&path-prefix=en',
        'http://vignette2.wikia.nocookie.net/nintendo/images/4/48/Yoshi.png/revision/latest?cb=20140214234810&path-prefix=en',
        'http://ges-sa.com/wp-content/uploads/2015/05/Puzzle-Dragons-Z-Puzzle-Dragons-Super-Mario-Bros.-Edition-art.jpg',
        'https://sickr.files.wordpress.com/2012/08/koopalings_new_super_mario_bros-_2.png',
        'http://vignette3.wikia.nocookie.net/mario/images/7/78/Tanooki_Mario_Artwork_-_Super_Mario_Bros._3.png/revision/latest?cb=20120518002849',
        'http://img03.deviantart.net/cfa9/i/2012/343/9/9/new_super_mario_bros__u__wendy_o__koopa_by_legend_tony980-d5nkcdj.png',
        'http://img01.deviantart.net/1971/i/2012/268/9/c/new_super_mario_bros__u__bowser_jr__by_legend_tony980-d5fu8ht.png',
        'http://www.within-temptation.com/wp-content/uploads/2010/12/mario1.jpg',
        'https://upload.wikimedia.org/wikipedia/en/7/75/Koopa_Troopa_3D_Land.png',
        'http://i.imgur.com/QfJ0F98.png',
        'https://upload.wikimedia.org/wikipedia/en/d/d1/Toad_3D_Land.png'
      ],
      matched: [],
      turned: [],
      win: false
    }
  }

  flipCard = (index) => {
    const { turned, cards } = this.state
    if (turned.length < 2) {
      this.setState({
        turned: turned.concat(index)
      }, () => {
        if (this.state.turned.length === 2) {
          if (cards[this.state.turned[0]] === cards[this.state.turned[1]]) {
            this.setState({
              matched: this.state.matched.concat(...this.state.turned),
              turned: []
            }, () => {
              if (this.state.matched.length === cards.length) {
                setTimeout(() => {
                  this.setState({ win: true })
                }, SHOW_CARD/2)
              }
            })
          } else {
            setTimeout(() => {
              this.setState({ turned: [] })
            }, SHOW_CARD)
          }
        }
      })
    }
  }

  render () {
    if (!this.state.win) {
      const cards = this.state.cards.map((card, index) => {
        let up = !this.state.turned.includes(index) ? this.state.matched.includes(index) : this.state.turned.includes(index)
        return <Card flipCard={this.flipCard} value={card} up={up} index={index} key={index} />
      })
      return <div>
        <h1>Mario Memory</h1>
        <main>
          {cards}
        </main>
      </div>
    } else {
      return <div>
        <h1> YOU WIN!!! </h1>
      </div>
    }
  }
}

export default App
