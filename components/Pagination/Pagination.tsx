import { Data } from 'types/data'

type Props = {
  data: Data
  page: number
  onClick: (page: number) => void
}

const Pagination = ({ data, page, onClick }: Props) => {
  return (
    <div className="btn-group justify-center">
      {data?.total_pages && (
        <div className="btn-group">
          <button className="btn" onClick={() => onClick(page - 1)}>
            «
          </button>
          <div className="dropdown dropdown-top">
            <label tabIndex={0} className="btn rounded-none">
              Page {page} / {data.total_pages}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 max-h-96 overflow-y-auto"
              key={page}
            >
              {[...Array(data.total_pages)].map((element, index) => (
                <li
                  key={`${page}-${index + 1}`}
                  className={page === index + 1 ? 'opacity-60 pointer-events-none' : ''}
                  onClick={() => onClick(index + 1)}
                >
                  <a>Page {index + 1}</a>
                </li>
              ))}
            </ul>
          </div>
          <button className="btn" onClick={() => onClick(page + 1)}>
            »
          </button>
        </div>
      )}
    </div>
  )
}

export default Pagination
