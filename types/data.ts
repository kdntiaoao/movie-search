export type Result = Readonly<{
  id: number
  overview: string
  poster_path: string | null
  release_date?: string
  title: string
}>

export type Data = Readonly<
  | {
      page: number
      results: Result[]
      total_pages: number
    }
  | undefined
>
