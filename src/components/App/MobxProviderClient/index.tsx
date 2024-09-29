"use client";

import { Provider as MobxProvider } from "mobx-react";
import mobxStore from "@/stores/AppStore";

export default function MobxProviderClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MobxProvider store={mobxStore}>{children}</MobxProvider>;
}
