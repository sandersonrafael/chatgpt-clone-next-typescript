import { useState } from 'react';
import IconSend from './icons/IconSend';

type Props = {
  disabled: boolean;
  onSend: (message: string) => void; // eslint-disable-line no-unused-vars
};

export default function ChatMessageInput({ disabled, onSend }: Props) {
  const [text, setText] = useState('');

  const handleSendMessage = () => {
    if (!disabled && text.trim() !== '') {
      onSend(text);
      setText('');
    }
  };

  return (
    <div className="">
      <textarea></textarea>

      <div onClick={handleSendMessage} className="">
        <IconSend width={14} height={14} />
      </div>
    </div>
  );
}
