import { Chat } from '@/types/Chat';
import ChatPlaceholder from './ChatPlaceholder';

type Props = {
  chat: Chat | undefined;
};

export default function ChatArea({ chat }: Props) {
  return (
    <section className="flex-auto h-0 overflow-y-scroll">
      {!chat && <ChatPlaceholder />}
      {chat && chat.messages.map((item, key) => (
        <div key={key}>ok</div>
      ))}
    </section>
  );
}
