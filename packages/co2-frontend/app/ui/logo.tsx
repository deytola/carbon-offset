'use client';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
export default function Logo() {
  return (
    <div
      className="flex flex-row items-center leading-none text-white"
    >
      <LanguageOutlinedIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Humane</p>
    </div>
  );
}
