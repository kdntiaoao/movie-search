import { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className="flex flex-col min-h-screen">
      <header>
        <div className="py-4 border-gray-200 border-b">
          <h1 className="text-center text-lg sm:text-3xl font-bold">
            <Link href="/">
              <a>映画検索サイト</a>
            </Link>
          </h1>
        </div>
      </header>
      <main>{children}</main>
      <footer className="mt-auto">
        <div className="py-4 text-gray-400 text-center">
          <small>© 2022 映画検索サイト</small>
        </div>
      </footer>
    </div>
  </>
)

export default Layout
