import { mdiMagnify } from "@mdi/js";
import FloatButton from "../FloatButton";

export default function AddNewForm() {
  return (
    <>
      <div>add new form</div>
      <FloatButton iconName={mdiMagnify} goto="search"/>
    </>
  );
}
