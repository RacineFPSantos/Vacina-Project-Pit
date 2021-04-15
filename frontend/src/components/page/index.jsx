import React from 'react';

const Page = ({ title, children }) => (
  <main className="container">
    {title ? <h1>{title}</h1> : null}
    <section className="d-flex-center">{children}</section>
  </main>
);

export default Page;
