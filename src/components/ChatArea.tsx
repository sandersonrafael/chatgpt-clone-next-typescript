import { Chat } from '@/types/Chat';
import ChatPlaceholder from './ChatPlaceholder';
import ChatMessageItem from './ChatItemMessage';
import ChatMessageLoading from './ChatMessageLoading';

type Props = {
  chat: Chat | undefined;
  loading: boolean;
};

export default function ChatArea({ chat, loading }: Props) {
  return (
    <section className="flex-auto h-0 overflow-y-scroll">
      {!chat && <ChatPlaceholder />}
      {chat && chat.messages.map((item) => (
        <ChatMessageItem key={item.id} item={item} />
      ))}
      {loading && <ChatMessageLoading />}
    </section>
  );
}
