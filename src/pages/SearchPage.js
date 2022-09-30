import "./SearchPage.css"
import { useStateValue } from "../StateProvider"

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue()

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage__results">

      </div>
    </div>
  )
}

export default SearchPage