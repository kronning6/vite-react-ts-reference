import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import HelloTailwind from './components/HelloTailwind';
import JSONPlaceholderPhoto from './components/JSONPlaceholderPhoto';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto mt-20 w-96">
        <HelloTailwind />
        <JSONPlaceholderPhoto photoId={20} />
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
}

export default App;
