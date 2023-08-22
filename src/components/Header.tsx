import IconAdd from './icons/IconAdd';
import IconMenu from './icons/IconMenu';

type Props = {
  title: string;
  openSidebarClick: () => void;
  newChatClick: () => void;
};

export default function Header({ title, openSidebarClick, newChatClick }: Props) {
  return (
    <header className="
      flex justify-between items-center w-full
      border-b border-b-gray-600 p-2 md:hidden
    ">
      <div onClick={openSidebarClick} className="cursor-pointer">
        <IconMenu width={24} height={24} />
      </div>

      <div className="mx-2 truncate">{title}</div>

      <div onClick={newChatClick} className="cursor-pointer">
        <IconAdd width={24} height={24} />
      </div>
    </header>
  );
}
