import React from 'react'
import Link from 'components/Link'
import PropTypes from 'prop-types'

const SearchResults = ({ hits }) => (
  <div className="container search-results">
    {hits.length > 0 && (
      <div className="hits">
        <ul className="topics__list list-unstyled">
          {hits.map(result => (
            <li className="topics__list__item" key={result.objectID}>
              <a href={result.url} className="topics__list__link">
                <h4
                  className="topics__list__title"
                  dangerouslySetInnerHTML={{
                    __html: result._highlightResult.title.value,
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: result._snippetResult.text.value,
                  }}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
    {hits.length === 0 && (
      <div className="hits-rest">
        <p>
        没找到你要找的东西吗？可以尝试查找我们的{' '}
          <Link to="#" target="_blank">
          论坛
          </Link>
          .
        </p>
        <p>
          如果你有其他问题，也可以联系我们的木星BI开发团队
        </p>
      </div>
    )}
  </div>
)

SearchResults.propTypes = {
  hits: PropTypes.array,
}

export default SearchResults
