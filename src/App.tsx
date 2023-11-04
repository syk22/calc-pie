import { MultipleView } from './pages/MultipleView';
import { MultipleProvider } from './providers/MultipleProvider';

const App = () => {
  return (
    <MultipleProvider>
      <MultipleView />
    </MultipleProvider>
  );
};

export default App;
