'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// title
// param is to change the url
export default function NavbarItem({ title, param}) {
  // useSearchParams is a Client Component hook that lets you read the current URL's query string.
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  return (
    <div className={`hover:text-amber-500 ${
      genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg' : ''
    
    }`}>
      <Link href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}


// export default function NavbarItem({ title, param }) {
//   const searchParams = useSearchParams();
//   const genre = searchParams.get('genre');
//   return (
//     <div>
//       <Link
//         className={`hover:text-amber-600 font-semibold ${
//           genre === param
//             ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
//             : ''
//         }`}
//         href={`/?genre=${param}`}
//       >
//         {title}
//       </Link>
//     </div>
//   );
// }
