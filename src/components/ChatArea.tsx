import { Chat } from '@/types/Chat';
import ChatPlaceholder from './ChatPlaceholder';
import ChatMessageItem from './ChatItemMessage';

type Props = {
  chat: Chat | undefined;
};

export default function ChatArea({ chat }: Props) {
  return (
    <section className="flex-auto h-0 overflow-y-scroll">
      {!chat && <ChatPlaceholder />}
      {chat && chat.messages.map((item) => (
        <ChatMessageItem key={item.id} item={item} />
      ))}
    </section>
  );
}
