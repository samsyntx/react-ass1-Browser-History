import './index.css'

const SearchItems = props => {
  const {eachItemDetail, deletingParticularItemFromList} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItemDetail

  const deleteItemFunction = () => {
    deletingParticularItemFromList(id)
  }

  return (
    <li className="list-content-and-delete-button">
      <div className="complete-list-content">
        <p className="list-date-time">{timeAccessed}</p>
        <div className="logo-and-domain-website-container">
          <img className="domain-logo-style" src={logoUrl} alt="domain logo" />
          <div className="domain-title-and-website">
            <p className="domain-title-style">{title}</p>
            <p className="website-style">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        data-testid="delete"
        onClick={deleteItemFunction}
        className="delete-icon-style"
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default SearchItems
