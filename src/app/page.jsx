"use client";
import sourceAlienPlanets from "@/lib/aliens.js";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [alienPlanets, setAlienPlanets] = useState(sourceAlienPlanets);
  console.log(alienPlanets);

  return (
    <div id="main-container">
      <div id="section-1" className="section-containers">
        <p>1</p>
        <hr />
        <div id="blue-box"></div>
      </div>
      <div id="section-2" className="section-containers">
        <p>2</p>
        <hr />
        <Image
          src="/meme.png"
          alt="programming meme"
          width="940"
          height="949"
          priority
        />
      </div>
      <div id="section-3" className="section-containers">
        <p>3</p>
        <hr />
        <h2>Alien Planets</h2>
        <div id="alien-planet-container">
          {alienPlanets.map((planet) => {
            return (
              <div key={planet.id} className="planet-cards">
                <p className="planet-emojis">{planet.emoji}</p>
                <h3 className="planet-names">{planet.name}</h3>
                <p className="planet-descriptions">
                  {planet.name} is {planet.distanceFromEarth} miles from Earth.
                  {planet.name} is believed to{" "}
                  {planet.hasLife ? "have" : "not have"} life. The atmosphere of{" "}
                  {planet.name} is {planet.atmosphere}.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
