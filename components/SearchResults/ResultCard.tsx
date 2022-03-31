import Image, { StaticImageData } from 'next/image'
import { Result } from 'types/data'

type Props = {
  result: Result
  imgUrl: string | StaticImageData
}

const ResultCard = (props: Props) => (
  <div className="card card-compact bg-base-100 shadow-xl h-full">
    <figure className="w-full aspect-[2/3] relative">
      <Image src={props.imgUrl} alt={`${props.result.title}のポスター画像`} layout='fill' objectFit="cover" />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-sm xs:text-base">{props.result.title}</h2>
    </div>
  </div>
)

export default ResultCard
