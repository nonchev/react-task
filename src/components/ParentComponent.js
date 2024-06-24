import MainComponent from './MainComponent';
import SiblingComponent from './SiblingComponent';

export default function ParentComponent() {
  return (
    <div>
      <h3>Parent Component</h3>
      <div>Selected value: <b>...</b></div>

      <div style={{ display: 'flex', gap: 40, marginTop: 40 }}>
        <MainComponent />
        <SiblingComponent />
      </div>
    </div>
  );
}
