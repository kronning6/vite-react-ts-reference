import { useExampleStore } from '../core/exampleStore';

export default function ZustandComponent() {
  const example = useExampleStore(state => state.name);
  return (
    <div className="text-center">
      <p className="text-amber-50">{example}</p>
    </div>
  );
}
