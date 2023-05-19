import { useState } from 'react';
import { useExampleStore } from '../core/exampleStore';

export default function ZustandComponent() {
  const [count, setCount] = useState(1);
  const example = useExampleStore(state => state.name);
  const updateName = useExampleStore(state => state.updateName);

  return (
    <div className="mt-5 text-center">
      <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                updateName(`Zustand Rocks! x${count}`);
                setCount(count + 1);
              }}>{example}</button>
    </div>
  );
}
