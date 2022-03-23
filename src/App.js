import { Parent } from './ParentToChild/Parent';
import './App.css';
import { ParentInput } from './ChildToParent/ParentInput';
import { RenderPrimitive } from './Rendering/RenderPrimitive';
import { RenderComplexData } from './Rendering/RenderingComplexData';
import { AsynchronousData } from './Rendering/AsynchronousData';
import { Fetch } from './FetchAxios/Fetch';
import { AxiosFetch } from './FetchAxios/AxiosFetch';
import { WithoutUseMemo } from './MemoHook/WithoutUseMemo';
import { WithUseMemo } from './MemoHook/WithUseMemo';
import { WithoutUseCallback } from './UseCallbackHook/WithoutUseCallback';
import { WithoutReactMemo } from './ReactMemo/WithoutReactMemo';
import { WithReactMemo } from './ReactMemo/WitReactMemo';
import { WithCallback } from './UseCallbackHook/WithCallback';
import { ContextParent } from './ContextHooks/ContextParent';

function App() {
  return (
    <div>
      <ContextParent />
      <WithCallback />
      <WithReactMemo />
      <WithoutReactMemo />
      <WithUseMemo />
      <Parent />
      <ParentInput />
      <RenderPrimitive />
      <RenderComplexData />
      <AsynchronousData />
      <Fetch />
      <AxiosFetch />
      <WithoutUseMemo />
      <WithoutUseCallback />
    </div>
  );
}

export default App;
