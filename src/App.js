import { Parent } from './ParentToChild/Parent';
import './App.css';
import { ParentInput } from './ChildToParent/ParentInput';
import { RenderPrimitive } from './Rendering/RenderPrimitive';
import { RenderComplexData } from './Rendering/RenderingComplexData';
import { AsynchronousData } from './Rendering/AsynchronousData';
import { Fetch } from './FetchAxios/Fetch';
import { AxiosFetch } from './FetchAxios/AxiosFetch';

function App() {
  return (
    <div>
      <Parent />
      <ParentInput />
      <RenderPrimitive />
      <RenderComplexData />
      <AsynchronousData />
      <Fetch />
      <AxiosFetch />
    </div>
  );
}

export default App;
