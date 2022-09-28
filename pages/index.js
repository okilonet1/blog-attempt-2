import Head from "next/head";
import Image from "next/image";
import Format from "../layout/format";

import Section1 from "../components/section1";

export default function Home() {
  return (
    <Format>
      <Section1 />
    </Format>
  );
}
