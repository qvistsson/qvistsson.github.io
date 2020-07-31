import React from 'react';

const Introduction = function () {
  return (
    <div>
      <p className="intro-body m-bottom-small">
        And I've been all about front end development since April 2020, when I
        realized coding and design was my jam. Since then I've been committed to
        self-studying, and every day I'm learning something new. I have a great
        handle on <span>HTML</span>, <span>JavaScript</span> and{' '}
        <span>CSS</span>, and enjoy creating <span>React</span> apps.
      </p>
      <p className="intro-body m-bottom-small">
        I've also created <span>WordPress</span> themes, <span>D3</span> data
        visualizations and currently I'm studying <span>Bootstrap</span> and{' '}
        <span>Redux</span>.
      </p>
      <p className="intro-body">
        My learning process has been guided by the curriculum at FreeCodeCamp, and below
        you'll find some of the projects I've created as part of their
        certifications.
      </p>
    </div>
  );
};

const ContactMe = function () {
  return (
    <div>
      <p className="intro-body m-bottom-small">
        I'm currently looking for new opportunities, so don't hesitate to reach
        out if you'd like to work together.
      </p>
      <p className="intro-body">You can reach me via:</p>
    </div>
  );
};

export { Introduction, ContactMe };
