'use client';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ChatArea from '@/components/ChatArea';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Chat } from '@/types/Chat';
import SideBarChatButton from '@/components/SideBarChatButton';

export default function Page() {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatActiveId, setChatActiveId] = useState('');
  const [chatActive, setChatActive] = useState<Chat>();
  const [AILoading, setAILoading] = useState(false);

  useEffect(() => {
    setChatActive(chatList.find((item) => item.id === chatActiveId));
  }, [chatActiveId, chatList]);

  useEffect(() => {
    if (AILoading) getAIResponse();
  }, [AILoading]); // eslint-disable-line react-hooks/exhaustive-deps

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  const getAIResponse = () => {
    setTimeout(() => {
      const chatListClone = [...chatList];
      const chatIndex = chatListClone.findIndex((item) => item.id === chatActiveId);
      if (chatIndex > -1) chatListClone[chatIndex].messages.push({
        id: uuidv4(),
        author: 'ai',
        body: 'Aqui vai a resposta da AI ;)',
      });
      setChatList(chatListClone);
      setAILoading(false);
    }, 2000);
  };

  const handleClearChats = () => {
    if (AILoading) return;

    setChatActiveId('');
    setChatList([]);
  };

  const handleNewChat = () => {
    if (AILoading) return;

    setChatActiveId('');
    closeSidebar();
  };

  const handleSelectChat = (id: string) => {
    if (AILoading) return;

    const item = chatList.find(item => item.id === id);
    if (item) setChatActiveId(item.id);
    closeSidebar();
  };

  const handleDeleteChat = (id: string) => {
    const chatListClone = [...chatList];
    const chatIndex = chatListClone.findIndex(item => item.id === id);
    chatListClone.splice(chatIndex, 1);
    setChatList(chatListClone);
    setChatActiveId('');
  };

  const handleEditChat = (id: string, newTitle: string) => {
    if (newTitle) {
      const chatListClone = [...chatList];
      const chatIndex = chatListClone.findIndex(item => item.id === id);
      chatListClone[chatIndex].title = newTitle;
      setChatList(chatListClone);
    }
  };

  const handleSendMessage = (message: string) => {
    if (!chatActiveId) {
      const newChatId = uuidv4();
      setChatList([
        {
          id: newChatId,
          title: message,
          messages: [{ id: uuidv4(), author: 'me', body: message }],
        },
        ...chatList,
      ]);

      setChatActiveId(newChatId);
    } else {
      const chatListClone = [...chatList];
      const chatIndex = chatListClone.findIndex((item) => item.id === chatActiveId);
      chatListClone[chatIndex].messages.push({ id: uuidv4(), author: 'me', body: message });

      setChatList(chatListClone);
    }

    setAILoading(true);
  };

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearChats}
        onNewChat={handleNewChat}
      >
        {chatList.map((item) => (
          <SideBarChatButton
            key={item.id}
            chatItem={item}
            active={item.id === chatActiveId}
            onClick={handleSelectChat}
            onDelete={handleDeleteChat}
            onEdit={handleEditChat}
          />
        ))}
      </Sidebar>

      <section className="flex flex-col w-full">
        <Header
          openSidebarClick={openSidebar}
          title={chatActive ? chatActive.title : 'Nova conversa'}
          newChatClick={handleNewChat}
        />

        <ChatArea chat={chatActive} loading={AILoading} />

        <Footer onSendMessage={handleSendMessage} disabled={AILoading} />
      </section>
    </main>
  );
}
