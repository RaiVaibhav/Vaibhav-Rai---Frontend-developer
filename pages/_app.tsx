import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, QueryCache } from "react-query";
import { createContext, useState } from "react";
import { message } from "antd";

export const LoadingContext = createContext({
  loading: false,
  toggleLoading: (val: boolean) => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [messageApi, contextHolder] = message.useMessage();
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: async () => {
        messageApi.error("Something went wrong in fetching the data");
      },
    }),
  });
  const [loading, setIsLoading] = useState(false);
  const toggleLoading = (val: boolean) => {
    setIsLoading(val);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingContext.Provider value={{ loading, toggleLoading }}>
        <Component {...pageProps} />
      </LoadingContext.Provider>
    </QueryClientProvider>
  );
}
