import ChatMessageInput from './ChatMessageInput';

type Props = {
  disabled: boolean;
  onSendMessage: (message: string) => void; // eslint-disable-line no-unused-vars
};

export default function Footer({ disabled, onSendMessage }: Props) {
  return (
    <footer className="w-full border-t border-t-gray-600 p-2">
      <div className="max-w-4xl m-auto">
        <ChatMessageInput
          disabled={disabled}
          onSend={onSendMessage}
        />
        <div className="pt-3 text-center text-xs text-gray-300">
          Desenvolvido por{' '}
          <a
            href="https://www.linkedin.com/in/sandersonrafael"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Sanderson Rafael
          </a>
        </div>
      </div>
    </footer>
  );
}
