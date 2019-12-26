import React from "react";
import Tile from "./Tile";

function Home() {
  return (
    <section>
      <div id="flex-reverse" className="flex_box">
        <Tile />
        <p>
          <span>Companies:</span>
          <br />
          <br /> ipsum dolor sit amet consectetur adipisicing elit. Quas cum
          aliquid nulla, consectetur rem veritatis voluptates reiciendis
          repellendus! Obcaecati minus error a dolorum ratione quo ab est nemo
          placeat ducimus? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit dolores doloremque natus voluptatibus commodi sed
          suscipit, ut quidem sint beatae reprehenderit. Provident minus
          ratione, neque beatae eius ex et ipsam.
        </p>
      </div>
      <div className="flex_box">
        <p>
          <span>Students:</span>
          <br />
          <br /> ipsum dolor sit amet, consectetur adipisicing elit. Enim iure
          fugit libero? Autem illum ut ad voluptatibus, dolorem ullam architecto
          quisquam. Excepturi optio earum quis autem quo exercitationem libero
          aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis, magni eligendi! Illo expedita rem, saepe eaque magni qui porro
          doloribus reiciendis alias. Omnis sequi iure accusamus tempore alias
          itaque aspernatur!
        </p>
        <img
          style={{ height: "300px", width: "300px", "border-radius": "10px" }}
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="img"
        />
      </div>
    </section>
  );
}

export default Home;
