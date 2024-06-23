'use client';
// 因為會 add some hooks,to detect the system or the users is light or dark, 所以要加上 'use client';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';

export default function DarkModeSwitch(){
  // useTheme() 來取得當下主題、和切換主題，會 useContext(ThemeContext) 來取得當下主題、和切換主題
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return(
    <div>
      {currentTheme === 'dark' ? (
        <MdLightMode
          onClick={() => setTheme('light')}
          className='text-xl cursor-pointer hover:text-amber-500'
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme('dark')}
          className='text-xl cursor-pointer hover:text-amber-500'
        />
      )}
    </div>
  )
}

// export default function DarkModeSwitch() {
//   const { theme, setTheme, systemTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);
//   const currentTheme = theme === 'system' ? systemTheme : theme;
//   useEffect(() => setMounted(true), []);
//   return (
//     <div>
//       {mounted &&
//         (currentTheme === 'dark' ? (
//           <MdLightMode
//             onClick={() => setTheme('light')}
//             className='text-xl cursor-pointer hover:text-amber-500'
//           />
//         ) : (
//           <MdDarkMode
//             onClick={() => setTheme('dark')}
//             className='text-xl cursor-pointer hover:text-amber-500'
//           />
//         ))}
//     </div>
//   );
// }
