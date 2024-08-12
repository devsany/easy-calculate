import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [fnum, setFnum] = useState("");
  const [snum, setSnum] = useState("");
  const [tnum, setTnum] = useState("");
  const [semiPerimeter, setSemiPerimeter] = useState("");
  const [result, setResult] = useState("");
  const handleArea = () => {
    const areaOfTriangle = (1 / 2) * (fnum * snum);
    console.log(areaOfTriangle);
    setResult(areaOfTriangle);
    console.log(fnum);
    console.log(snum);
    const l = fnum + snum + tnum;
    console.log(l);
  };
  // setSemiPerimeter(fnum + snum + tnum);
  console.log(Math.pow(2, 1 / 2));
  return (
    <>
      <div>
        <div>
          <input
            type="number"
            placeholder="enter first number"
            value={fnum}
            onChange={(e) => {
              setFnum(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="enter second number"
            value={snum}
            onChange={(e) => {
              setSnum(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="enter third number"
            value={snum}
            onChange={(e) => {
              setTnum(e.target.value);
            }}
          />
        </div>
        <div>
          solution: Area of trangle is: 1/2 x length x bredth
          <br></br> that is Area of triangle is : 1/2 x {fnum} x {snum} <br />
          result = {result}
        </div>
        Result:{result}
        <button onClick={handleArea}>Show Result</button>
      </div>
    </>
  );
}
