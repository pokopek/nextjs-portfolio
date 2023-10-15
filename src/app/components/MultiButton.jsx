"use client"
// import { Button } from "@material-tailwind/react";
 
// export default function Example() {
//   return <Button>Button</Button>;
// }
import { Button } from "@material-tailwind/react";
 
export default function ButtonColors() {
  return (
    <div className="flex w-max gap-4">
      <Button color="blue">color blue</Button>
      <Button color="red">color red</Button>
      <Button color="green">color green</Button>
      <Button color="amber">color amber</Button>
    </div>
  );
}