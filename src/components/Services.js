import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Soothing vibrations kirlian photography visualization practices bioneers, dreamwork chia seeds dolphin."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Radiant herbal tea impermanent infinite blessings feline acupuncture, projecting emotional release nonprofit patchouli pranayama bentonite clay."
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "The power of intention saturn return root chakra kelp, agave manifestation yoni trust the process cleansing one taste."
      },
      {
        icon: <FaBeer />,
        title: "Strongest beer",
        info:
          "Massage therapist transformative acroyoga Esalen, spiritual guru kirtan karmic oneness rolfing vitamin."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
