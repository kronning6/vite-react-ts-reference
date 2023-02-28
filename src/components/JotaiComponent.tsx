import { useAtom } from 'jotai';
import { exampleAtom } from '../core/exampleAtom';

export default function JotaiComponent() {
  const [example] = useAtom(exampleAtom);
  return (
    <div className="text-center">
      <p className="text-amber-50">{example}</p>
    </div>
  );
}
