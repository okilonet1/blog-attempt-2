import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";

export default function section1() {
  const bg = {
    background: "url('images/banner.png') no-repeat",
    backgroundPosition: "right",
  };
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-21">
        <h1 className="font-bold text-4xl pb=12 text-center">Trending</h1>
        {Slide()}
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <a>
            <Image src={"/images/img1.jpg"} width={600} height={600} />{" "}
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">
              Bussiness, Travel
            </a>
          </Link>
          <Link href={"/"}>
            <a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              Lorem ipsum, dolor sit amet consectetur
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          exercitationem perspiciatis odit obcaecati esse maxime asperiores
          possimus aliquid optio nesciunt voluptate inventore modi quod, dolor,
          soluta vel, reprehenderit perferendis quae?
        </p>
        <Author></Author>
      </div>
    </div>
  );
}
