import React from "react";
import { Typography, Button, Image } from "@material-tailwind/react";
import NavigationBar from "./libs/components/nav/NavigationBar";
import Card from "./libs/components/Card";

export default function Home() {
  const cards = [
    {
      title: "Top Developers",
      img: "https://i.imgur.com/mTcZ9AT.jpeg",
      text: "Culpa occaecat dolore dolor ad incididunt veniam ea irure.",
    },
    {
      title: "Extensive Planning",
      img: "https://i.imgur.com/mTcZ9AT.jpeg",
      text: "Labore ex quis sint Lorem magna duis laboris fugiat dolor dolore.",
    },
    {
      title: "Fair Prices",
      img: "https://i.imgur.com/mTcZ9AT.jpeg",
      text: "Consectetur amet esse pariatur adipisicing cupidatat duis in nisi.",
    },
    {
      title: "On Time Delivery",
      img: "https://i.imgur.com/mTcZ9AT.jpeg",
      text: "Cillum consectetur aute aliqua ad sit non excepteur officia anim ea.",
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="text-slate-400 relative pb-12">
        <NavigationBar />
        <div
          className="absolute top-0 left-0 w-full h-full -z-10 bg-slate-800"
          // TODO: Find right background images
          // style={{
          //   backgroundImage: `url(/backdrop2.jpg)`,
          //   backgroundSize: 'cover'
          // }}
        />
        <div className="flex flex-row">
          <div className="p-12 text-slate-200 lg:basis-1/2 lg:p-0 lg:pt-[120px] lg:pl-[90px]">
            <Typography variant="h1" className="pb-2">
              Dolore sint sit est ipsum elit.
            </Typography>
            <Typography variant="p" className="text-justify">
              Duis ad elit fugiat duis adipisicing nisi id minim dolore irure.
              Pariatur ea duis voluptate fugiat culpa id occaecat. Do
              consectetur aute nisi laborum aliqua voluptate commodo sit ipsum
              proident duis. Occaecat ut reprehenderit pariatur aute dolor quis
              aliquip. Esse anim esse commodo Lorem ipsum sunt sit occaecat
              nostrud minim. Duis et nostrud fugiat sunt duis ad mollit nisi
              ullamco dolore. Esse aute qui incididunt esse deserunt sint.
            </Typography>
          </div>
        </div>
      </div>
      {/* Offerings */}
      <div className="flex flex-col pt-12 pb-12 px-12 text-slate-800">
        <Typography variant="h2" className="block mx-auto">
          Why WonderByte?
        </Typography>
        <Typography variant="p" className="text-center">
          Take your business to the next level with us.
        </Typography>
        <div className="flex flex-row flex-wrap max-auto pt-12">
          {cards.map((c) => (
            <div className="p-6 w-full lg:basis-1/2">
              <Card
                imgSrc={c.img}
                imgClass="max-w-[180px] max-h-[180px]"
                title={c.title}
              >
                {c.text}
              </Card>
            </div>
          ))}
        </div>
      </div>
      {/* Quote Form */}
      {/* Footer/About */}
    </>
  );
}
