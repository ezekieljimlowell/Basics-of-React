import { Parent } from './ParentToChild/Parent';
import './App.css';
import { ParentInput } from './ChildToParent/ParentInput';
import { RenderPrimitive } from './Rendering/RenderPrimitive';
import { RenderComplexData } from './Rendering/RenderingComplexData';
import { AsynchronousData } from './Rendering/AsynchronousData';

function App() {
  return (
    
    <div>
      <Parent />
      <ParentInput />
      <RenderPrimitive />
      <RenderComplexData />
      <AsynchronousData />
    </div>
  );
}

export default App;
