import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import { SearchForm } from 'components/SearchForm'
import { useEffect, useState } from 'react'
import { Data } from 'types/data'
import { SearchResults } from 'components/SearchResults'
import { useRouter } from 'next/router'
import { Pagination } from 'components/Pagination'

const Search: NextPage = () => {
  const [word, setWord] = useState('')
  const [page, setPage] = useState(1)
  const [data, setData] = useState<Data>()
  const router = useRouter()

  const changeResult = (word: string, page: number) => {
    console.log('changeResult:', word)
    setPage(page)
    setWord(word)
  }

  const changePage = (page: number) => {
    if (page < 1) {
      return
    }
    if (data?.total_pages && page > data.total_pages) {
      return
    }
    console.log('changePage:', page)
    router.push({ pathname: '/search', query: { word: word, page: page.toString() } })
  }

  useEffect(() => {
    const query = router.query
    if (typeof query.word !== 'string' || isNaN(Number(query.page))) {
      return
    }
    console.log(router.query)
    changeResult(query.word, Number(query.page))
  }, [router.query])

  useEffect(() => {
    if (!word) {
      return
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=57585d1e9624443028acab0f0647ea14&language=ja-JP&include_adult=false&region=JP&query=${word}&page=${page}`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json) {
          console.log('fetch(search):', json)
          setData(json)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }, [word, page])

  return (
    <>
      <Layout>
        <Head>
          <title>映画検索サイト | 検索結果</title>
          <meta name="description" content="検索結果の表示ページです。" />
        </Head>

        <div className="wrapper my-10">
          <SearchForm />
          <SearchResults data={data} />
          <Pagination data={data} page={page} onClick={changePage} />
        </div>
      </Layout>
    </>
  )
}

export default Search
