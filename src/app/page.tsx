'use client';

import ChatArea from '@/components/ChatArea';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Chat } from '@/types/Chat';
import { useState } from 'react';

export default function Page() {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [AILoading, setAILoading] = useState(false);
  const [chatActive, setChatActive] = useState<Chat>({
    id: '123',
    messages: [
      { id: '999', author: 'me', body: 'Opa, tudo bem?' },
      { id: '123', author: 'ai', body: 'Tudo ótimo. Em que posso te ajudar?' },
    ],
    title: 'Por que no céu tem pão?',
  });

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  const handleClearChats = () => {};

  const handleNewChat = () => {};

  const handleSendMessage = () => {};

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearChats}
        onNewChat={handleNewChat}
      >
        ...
      </Sidebar>

      <section className="flex flex-col w-full">
        <Header
          openSidebarClick={openSidebar}
          title={'Nome do chat'}
          newChatClick={handleNewChat}
        />

        <ChatArea chat={chatActive} />

        <Footer
          onSendMessage={handleSendMessage}
          disabled={AILoading}
        />

      </section>
    </main>
  );
}
