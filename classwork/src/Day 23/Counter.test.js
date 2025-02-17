const React = require('react');
const { fireEvent, render, screen } = require('@testing-library/react');
const Counter = require('./Counter');

test('Counter Component', () => {
    render(<Counter />);
    const btn = screen.getByText("Increment");
    fireEvent.click(btn);
    expect(screen.getByText("Count = 1")).toBeInTheDocument();
});