import { ReactNode } from 'react';
import IconClose from './icons/IconClose';

type Props = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ children, open, onClose }: Props) {
  return (
    <section
      className={`
        fixed left-0 top-0 bottom-0 text-white md:w-64 md:static
        ${open ? 'w-screen bg-gray-600/75' : 'w-0'} 
      `}>

      <div className={`flex h-screen ${open ? 'ml-0' : '-ml-96'}`}>

        <div className="">
        barra lateral
        </div>

        <div
          className="flex justify-center items-center h-10 w-10 cursor-pointer md:hidden"
          onClick={onClose}
        >
          <IconClose width={24} height={24}/>
        </div>
      </div>
    </section>
  );
}
