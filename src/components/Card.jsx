import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

export default function Card({ result }) {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-sm rounded-lg sm:border sm:border-slate-400 transition-shadow duration-300 sm:m-2'>
      <Link href={`/movie/${result.id}`}>
        <Image 
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          priority 
          alt='movie poster'
          width={500}
          height={300}
          className='sm:rounded-t-lg group-hover:opacity-75'
        ></Image>
      </Link>
      <div className='p-2'>
        <h2 className='text-lg font-bold truncate group-hover:text-amber-600'>
          {result.title || result.name}
        </h2>
        <p className='line-clamp-2 text-md'>{result.overview}</p>
        <p className='flex items-center'>
          {result.release_date || result.first_air_date}
          <FiThumbsUp className={`h-5 ml-3 ${result.vote_count > 2000 ? 'text-amber-500' : ''}`}/>
            <span className={`${result.vote_count > 2000 ? 'text-amber-500' : ''}`}>{result.vote_count}</span>  
        </p>
      </div>
    </div>
  )
}
