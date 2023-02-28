import {Component} from 'react'
import SearchItems from '../SearchItems'
import './index.css'

class SearchPageComponent extends Component {
  state = {inputTyped: ''}

  changeTheInput = event => {
    this.setState({inputTyped: event.target.value})
  }

  callingDeleteFunFromSearchPage = uniqueId => {
    console.log(uniqueId)
  }

  render() {
    const {inputTyped} = this.state
    const {initialHistoryList} = this.props

    const filterListItemOnSearch = initialHistoryList.filter(eachList =>
      eachList.title.toLowerCase().includes(inputTyped.toLowerCase()),
    )

    let whatsNeedToShow = ''
    if (filterListItemOnSearch.length === 0) {
      whatsNeedToShow = (
        <p className="empty-search-view-style">Empty History View</p>
      )
    } else {
      whatsNeedToShow = filterListItemOnSearch.map(eachItem => (
        <SearchItems
          callingDeleteFunFromSearchPage={this.callingDeleteFunFromSearchPage}
          eachItemDetail={eachItem}
          key={eachItem.id}
        />
      ))
    }
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
        <ul className="bottom-search-items">{whatsNeedToShow}</ul>
      </div>
    )
  }
}

export default SearchPageComponent
