import ChildComponent from './ChildComponent';

export default function MainComponent() {
  return (
    <div style={{ padding: 40, background: '#000', border: '1px solid #ccc' }}>
      <h3>Main component</h3>

      <div style={{ marginBottom: 40 }}>
        <select style={{ height: 40, fontSize: 20, padding: 10 }}>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>

      <ChildComponent id={5} />
    </div>
  );
}
