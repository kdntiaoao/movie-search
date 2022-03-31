import { Data } from 'types/data'
import ResultCard from './ResultCard'
import moment from 'moment'

type Props = {
  data: Data
}

const SearchResults = (props: Props) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-4/5 xs:w-auto mx-auto mb-10">
      {props.data?.results.length &&
        props.data.results.map((result) => (
          <div key={result.id}>
            <label htmlFor={`modal-${result.id}`} className="modal-button">
              <ResultCard
                result={result}
                imgUrl={result.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` : "/images/no_image.png"}
              />
            </label>
            <input type="checkbox" id={`modal-${result.id}`} className="modal-toggle" />
            <label htmlFor={`modal-${result.id}`} className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                <h3 className="text-lg font-bold mb-4">{result.title}</h3>
                {result.overview && (
                  <div className="mb-4">
                    <h4 className="font-bold">あらすじ</h4>
                    <p>{result.overview}</p>
                  </div>
                )}
                {result.release_date && (
                  <div>
                    <h4 className="font-bold">公開日</h4>
                    <p>{moment(result.release_date).format('YYYY年MM月DD日')}</p>
                  </div>
                )}
              </label>
            </label>
          </div>
        ))}
    </div>
  )
}

export default SearchResults
