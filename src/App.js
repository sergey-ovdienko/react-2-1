import { Piano } from './components/Piano/Piano';

export const App = () => {
  return (
    <div>
      <h1>Simple piano</h1>
      <Piano initialOctave={5} />
    </div>
  );
};
