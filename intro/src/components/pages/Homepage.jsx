import {Nav} from '../ui/Nav.jsx';
import {Summary} from '../homepage_components/Summary.jsx';
import {Evaluations} from '../homepage_components/Evaluations.jsx';

import "../../index.css";

export function Homepage() {
  return (
    <div className="">
      <Nav />
      <Summary />
      <Evaluations />
    </div>
  );
}