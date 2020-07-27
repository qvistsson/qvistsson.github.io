import React from 'react';

const Introduction = function () {
  return (
    <div>
      <p className="intro-body m-bottom-small">
        Or less uniquely, Oscar—that's my name. And I've been all about front
        end development since April 2020, when I realized coding and design was
        my jam. Since then I've been on a relatively intense self-studying
        journey, and I've already learned a bunch of things. I got a good handle
        on <span>HTML</span> and <span>CSS</span>, and enjoy creating{' '}
        <span>React</span> apps.
      </p>
      <p className="intro-body m-bottom-small">
        I've also created <span>WordPress</span> themes, <span>D3</span> data
        visualizations and currently I'm studying <span>Bootstrap</span> and{' '}
        <span>Redux</span>.
      </p>
    </div>
  );
};

const ContactMe = function () {
  return (
    <div>
      <p className="intro-body m-bottom-small">
        I can't wait to get into this field, so if you want to reach out to discuss
        any opportunities—or anything, really!—don't hesitate to reach out. Looking forward
        to hearing from you!
      </p>
      <p className="intro-body m-bottom">You can reach me on:</p>
    </div>
  );
};

export { Introduction, ContactMe };
