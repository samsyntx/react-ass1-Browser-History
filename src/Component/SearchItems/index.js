import './index.css'

const SearchItems = props => {
  const {eachItemDetail, callingDeleteFunFromSearchPage} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItemDetail

  const deleteTheItem = () => {
    callingDeleteFunFromSearchPage(id)
  }

  return (
    <li className="complete-list-content-with-delete">
      <div className="complete-content-expect-delete">
        <p className="list-date-time">{timeAccessed}</p>
        <div className="logo-and-domain-website-container">
          <img className="domain-logo-style" src={logoUrl} alt="domain logo" />
          <div className="domain-title-and-website">
            <p className="domain-title-style">{title}</p>
            <p className="website-style">{domainUrl}</p>
          </div>
        </div>
      </div>
      <img
        className="delete-icon-style"
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
        onClick={deleteTheItem}
      />
    </li>
  )
}

export default SearchItems
