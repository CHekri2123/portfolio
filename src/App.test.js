import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

test('renders learn react link', async () => {
  render(
    <Router>
      <App />
    </Router>
  );

  // Use findByText for asynchronous rendering
  const linkElement = await screen.findByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
