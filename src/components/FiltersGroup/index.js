import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    titleSearch,
    categoryOptions,
    ratingsList,
    onChangeSearch,
    onSubmitSearch,
    onChangeCategory,
    activeCategory,
    activeRating,
    onChangeRating,
    onClickClearBtn,
  } = props

  const onChangedSearch = event => {
    onChangeSearch(event.target.value)
  }

  const onSubmittedSearch = event => {
    event.preventDefault()
    onSubmitSearch()
  }

  const GetCategoryEl = categoryDetails => {
    const {categoryItemDetails, isActive} = categoryDetails
    const {name, categoryId} = categoryItemDetails
    const getActiveCategoryCSS = isActive ? 'active-category' : ''
    const onChangedCategory = () => {
      onChangeCategory(categoryId)
    }

    return (
      <li className="filters-group-categories-li-el">
        <p
          className={`filters-group-categories-li-btn ${getActiveCategoryCSS}`}
          onClick={onChangedCategory}
        >
          {name}
        </p>
      </li>
    )
  }

  const GetRatingEl = ratingDetails => {
    const {ratingItemDetails, isActiveRating} = ratingDetails
    const {imageUrl, ratingId} = ratingItemDetails
    const getActiveRatingCSS = isActiveRating ? 'active-rating' : ''
    const onChangedRating = () => {
      onChangeRating(ratingId)
    }

    return (
      <li className="filters-group-ratings-li-el" onClick={onChangedRating}>
        <div className="filters-group-ratings-li-el-content">
          <img
            src={imageUrl}
            alt={`rating ${ratingId}`}
            className="filters-group-ratings-li-img"
          />
          <p className={`filters-group-ratings-li-text ${getActiveRatingCSS}`}>
            &up
          </p>
        </div>
      </li>
    )
  }

  return (
    <div className="filters-group-container">
      <form onSubmit={onSubmittedSearch}>
        <div className="filters-group-search">
          <input
            type="search"
            value={titleSearch}
            placeholder="Search"
            className="filters-group-search-el"
            onChange={onChangedSearch}
          />
          <BsSearch className="filters-group-search-icon" />
        </div>
      </form>

      <h1 className="filters-group-heading">Category</h1>
      <ul className="filters-group-categories-container">
        {categoryOptions.map(each => (
          <GetCategoryEl
            key={each.categoryId}
            categoryItemDetails={each}
            isActive={activeCategory === each.categoryId}
          />
        ))}
      </ul>

      <h1 className="filters-group-heading">Rating</h1>
      <ul className="filters-group-ratings-container">
        {ratingsList.map(each => (
          <GetRatingEl
            ratingItemDetails={each}
            key={each.ratingId}
            isActiveRating={activeRating === each.ratingId}
          />
        ))}
      </ul>

      <button
        type="button"
        className="filters-group-btn"
        onClick={onClickClearBtn}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup