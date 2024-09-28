"use client";

import { Provider as MobxProvider } from 'mobx-react';
import mobxStore from '@/stores/AppStore';
import { NavBar } from '@/components/App/NavBar';

export default function Home() {

  return (
    <MobxProvider store={mobxStore}>
      <NavBar />
    </MobxProvider>
  );
}
