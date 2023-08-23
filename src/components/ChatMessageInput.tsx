import { KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import IconSend from './icons/IconSend';

type Props = {
  disabled: boolean;
  onSend: (message: string) => void; // eslint-disable-line no-unused-vars
};

export default function ChatMessageInput({ disabled, onSend }: Props) {
  const [text, setText] = useState('');
  const textElement = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textElement.current) {
      textElement.current.style.height = '0px';
      const scrollHeight = textElement.current.scrollHeight;
      textElement.current.style.height = `${scrollHeight}px`;
    }
  }, [text, textElement]);

  const handleSendMessage = () => {
    if (!disabled && text.trim() !== '') {
      onSend(text);
      setText('');
    }
  };

  const handleTextKeyUp: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.code.toLowerCase() === 'enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`
      flex border border-gray-800/50 bg-gpt-lightgray p-2 rounded-md
      ${disabled && 'opacity-50'}
    `}>
      <textarea
        ref={textElement}
        className="
          flex-1 border-0 bg-transparent resize-none outline-none
          h-7 max-h-48 overflow-y-auto
        "
        placeholder="Digite uma mensagem"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleTextKeyUp}
        disabled={disabled}
      ></textarea>

      <div onClick={handleSendMessage} className={`
        self-end p-1 cursor-pointer ${text.length ? 'opacity-100 hover:bg-black/20' : 'opacity-20'}
      `}>
        <IconSend width={14} height={14} />
      </div>
    </div>
  );
}
