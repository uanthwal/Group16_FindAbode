import React, { Component } from "react";
import "../../css/apartment/Review.css";

class Review extends Component {
  render() {
    return (
      <section className="section-testimonials">
        <div className="timeline">
          <h2>Our customers can't live without us</h2>
        </div>
        <div className="testimonials">
          <div>
            <blockquote>
              This site definitely appeals to the average person because the
              layout is so simple but very VERY effective. It is a clean site
              with a flawless look, and someone without any technical background
              would definitely appreciate it. The layout makes anyone feel
              comfortable because it is so well done and clean looking. You feel
              as if you are in good hands and you know that you will be able to
              find anything you need on this site.
              <cite>Ruize Nie</cite>
            </blockquote>
          </div>

          <div>
            <blockquote>
              The design is very professional and well done. I love the
              washed-out image of the globe on the left behind the links. The
              site feels great. I suggest that you change the fonts to Arial, a
              more rounded font, to go with the professional feel of the site.
              There are minimum graphics, and the graphics there are small and
              fast-loading. The colors of the images go together nicely.
              <cite>Ruminder Singh</cite>
            </blockquote>
          </div>

          <div>
            <blockquote>
              It is easy to navigate this site because all of the links are
              right there on the left hand side, and people without
              image-loading browsers can access the links via the text at the
              bottom which is very handy and essential for a good site. It is a
              good idea having a highlights section right in the middle of the
              screen because it is obvious, and all important information can be
              accessed by the reader easil
              <cite>Souvik</cite>
            </blockquote>
          </div>
        </div>
      </section>
    );
  }
}
export default Review;
