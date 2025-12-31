import { h } from 'preact';
import renderToString from 'preact-render-to-string';

interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  return <div>Hello, {name}!</div>;
}

const App = () => {
  return (
    <div>
      <h1>Preact App</h1>
      <Greeting name="World" />
    </div>
  );
};

const html = renderToString(<App />);
console.log(html);
