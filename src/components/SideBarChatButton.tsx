import { useState } from 'react';
import { Chat } from '@/types/Chat';
import IconChatLeft from './icons/IconChatLeft';
import IconTrash from './icons/IconTrash';
import IconEdit from './icons/IconEdit';
import IconClose from './icons/IconClose';
import IconCheck from './icons/IconCheck';

type Props = {
  chatItem: Chat;
  active: boolean;
  onClick: (id: string) => void; // eslint-disable-line no-unused-vars
  onDelete: (id: string) => void; // eslint-disable-line no-unused-vars
  onEdit: (id: string, newTitle: string) => void; // eslint-disable-line no-unused-vars
};

export default function SideBarChatButton({ chatItem, active, onClick, onDelete, onEdit }: Props) {
  const [deleting, setDeleting] = useState(false);
  const [editing, setEditing] = useState(false);
  const [titleInput, setTitleInput] = useState(chatItem.title);

  const handleClickButton = () => {
    if (!deleting && !editing) onClick(chatItem.id);
  };

  const handleConfirmButton = () => {
    if (deleting) onDelete(chatItem.id);
    if (editing && titleInput.trim() !== '') onEdit(chatItem.id, titleInput.trim());

    setDeleting(false);
    setEditing(false);
  };

  const handleCancelButton = () => {
    setDeleting(false);
    setEditing(false);
  };

  return (
    <div onClick={handleClickButton} className={`
      flex items-center rounded-md p-3 text-sm cursor-pointer
      hover:bg-gray-500/10 ${active ? 'bg-gray-500/20' : 'bg-transparent'}
    `}>
      <div className="mr-3">
        {deleting ? <IconTrash width={16} height={16} /> : <IconChatLeft width={16} height={16} />}
      </div>

      <div className="flex-1 text-sm overflow-x-hidden">
        {editing ?
          <input
            className="w-full bg-transparent text-sm outline-none border border-blue-500"
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
          :
          <div className="border border-transparent truncate">
            {deleting ? `Delete ${chatItem.title}` : chatItem.title}
          </div>
        }
      </div>

      {active && !deleting && !editing &&
        <div className="flex">
          <div
            className="cursor-pointer mx-1 opacity-60 hover:opacity-100"
            onClick={() => setEditing(true)}
          >
            <IconEdit width={16} height={16} />
          </div>

          <div
            className="cursor-pointer mx-1 opacity-60 hover:opacity-100"
            onClick={() => setDeleting(true)}
          >
            <IconTrash width={16} height={16} />
          </div>
        </div>
      }

      {(deleting || editing) &&
        <div className="flex">
          <div
            className="cursor-pointer mx-1 opacity-60 hover:opacity-100"
            onClick={handleConfirmButton}
          >
            <IconCheck width={16} height={16} />
          </div>

          <div
            className="cursor-pointer mx-1 opacity-60 hover:opacity-100"
            onClick={handleCancelButton}
          >
            <IconClose width={16} height={16} />
          </div>
        </div>
      }
    </div>
  );
}
