import Calculator from "components/Calculator/Calculator";
import s from "./App.module.css";
import { RandomUser } from "components/RadomUser/RandomUser";
export function App() {
  return (
    <div className={s.root}>
      {/* <Calculator /> */}
      <RandomUser />
    </div>
  );
}
