'use client';
import { useTheme } from '@/context/ThemeProvider';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import Image from 'next/image';
import { themeMenuItems } from '@/constants';

const ThemeToggler = () => {
  const { mode, setMode } = useTheme();

  return (
    <Menubar className='relative border-none bg-transparent shadow-none dark:bg-transparent'>
      <MenubarMenu>
        <MenubarTrigger className='cursor-pointer bg-transparent focus:bg-transparent data-[state=open]:bg-transparent dark:bg-transparent dark:focus:bg-transparent dark:data-[state=open]:bg-transparent'>
          {mode === 'light' ? (
            <Image
              src='/assets/icons/sun.svg'
              alt='sun'
              width={20}
              height={20}
              className='active-theme'
            />
          ) : (
            <Image
              src='/assets/icons/moon.svg'
              alt='moon'
              width={16}
              height={16}
              className='active-theme'
            />
          )}
        </MenubarTrigger>
        <MenubarContent className='absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:bg-slate-900 dark:text-slate-100'>
          {themeMenuItems.map(item => (
            // @ts-ignore
            <MenubarItem
              key={item.value}
              className='flex cursor-pointer items-center gap-4 px-2.5 py-2 dark:hover:bg-slate-800 dark:hover:text-slate-100'
              onClick={() => {
                setMode(item.value);
                if (item.value !== 'system') {
                  localStorage.theme = item.value;
                } else {
                  localStorage.removeItem('theme');
                }
              }}>
              <Image
                src={item.icon}
                alt={item.value}
                width={item.value === 'dark' ? 14 : 18}
                height={item.value === 'dark' ? 14 : 18}
                className={`${mode === item.value && 'active-theme'}`}
              />
              <p className='font-medium'>{item.label}</p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default ThemeToggler;
