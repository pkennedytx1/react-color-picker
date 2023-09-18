import './App.css';
import ColorPickerClass from './components/ColorPickerClass';
import ColorPickerFunctional from './components/ColorPickerFunctional';

function App() {
  const initialColor = '#e66465'
  return (
    <div className="App">
      {/* <ColorPickerClass /> */}
      <ColorPickerFunctional initialColor={initialColor}/>
    </div>
  );
}

export default App;
