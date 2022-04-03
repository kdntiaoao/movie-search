import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { EmptyMessage } from './index'

const SearchForm = () => {
  const [word, setWord] = useState('')
  const [isEmpty, setIsEmpty] = useState(false)
  const router = useRouter()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!word) {
      setIsEmpty(true)
    } else {
      const urlObject = { pathname: '/search', query: { word: word, page: '1' } }
      setIsEmpty(false)
      setWord('')
      router.push(urlObject)
    }
  }

  return (
    <>
      <div className="w-[500px] max-w-[90%] mx-auto mb-10 relative">
        <form className="flex" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="キーワードを入力してください"
            className="input input-bordered input-sm sm:input-md flex-1 mr-4"
            value={word}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary btn-sm sm:btn-md" type="submit">
            検索
          </button>
        </form>
        {isEmpty && (
          <div className="absolute bottom-0 left-[0.75rem] sm:left-[1rem] translate-y-[140%]">
            <EmptyMessage />
          </div>
        )}
      </div>
    </>
  )
}

export default SearchForm
