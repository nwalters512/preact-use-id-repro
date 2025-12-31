import { useId } from "preact/compat";
import renderToString from "preact-render-to-string/jsx";

function Foo() {
  const id = useId();
  return <div id={id} />;
}

const App = () => {
  return (
    <>
      <Foo />
      <Foo />
    </>
  );
};

const html = renderToString(<App />);
console.log(html);
