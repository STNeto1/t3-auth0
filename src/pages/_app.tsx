import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import { UserProvider } from "@auth0/nextjs-auth0";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Component {...pageProps} />;
    </UserProvider>
  );
};

export default trpc.withTRPC(MyApp);
