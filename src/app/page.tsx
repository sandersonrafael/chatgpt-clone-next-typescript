'use client';

import ChatArea from '@/components/ChatArea';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Chat } from '@/types/Chat';
import { useState } from 'react';

export default function Page() {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatActive, setChatActive] = useState<Chat>();

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  const handleClearChats = () => {};

  const handleNewChat = () => {};

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

      </section>
    </main>
  );
}
