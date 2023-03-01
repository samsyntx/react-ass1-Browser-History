import {Component} from 'react'
import SearchItems from './Component/SearchItems'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {inputTyped: '', toShowList: initialHistoryList}

  changeTheInput = event => {
    this.setState({inputTyped: event.target.value})
  }

  deletingParticularItemFromList = uniqueNum => {
    const {toShowList} = this.state
    const filteredList = toShowList.filter(
      eachItem => eachItem.id !== uniqueNum,
    )
    this.setState({toShowList: filteredList})
  }

  render() {
    const {inputTyped, toShowList} = this.state

    const filterListItemOnSearch = toShowList.filter(eachList =>
      eachList.title.toLowerCase().includes(inputTyped.toLowerCase()),
    )

    return (
      <div className="search-page-main-container">
        <section className="history-search-top-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-item-search-section">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              value={inputTyped}
              onChange={this.changeTheInput}
              placeholder="Search History"
              className="search-box"
              type="search"
            />
          </div>
        </section>
        <ul className="bottom-search-items">
          {filterListItemOnSearch.length > 0 ? (
            filterListItemOnSearch.map(eachItem => (
              <SearchItems
                deletingParticularItemFromList={
                  this.deletingParticularItemFromList
                }
                eachItemDetail={eachItem}
                key={eachItem.id}
              />
            ))
          ) : (
            <p className="empty-search-view-style">
              There is no history to show
            </p>
          )}
        </ul>
      </div>
    )
  }
}

export default App
