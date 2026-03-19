
import { useAuthStore } from "./store/auth-store"
import { Suspense, useEffect } from "react";
import { ErrorBoundary, ErrorFallback } from "./components/error-boundary";
import SuspenseFallback from "./components/suspense-fallback";
import Routes from "./routes";

export function App() {

  const { fetchUserDetails } = useAuthStore();

  useEffect(()=>{
    fetchUserDetails();
  },[]);

  return (
    <ErrorBoundary fallback={<ErrorFallback error={new Error('Something went wrong')} />}>
      <Suspense fallback={<SuspenseFallback />}>
        <Routes />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App
