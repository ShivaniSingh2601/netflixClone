import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import Browser from "../components/Browser"

// test("Should find login button",()=>{
//     const button = screen.getByRole("button");
//     expect(button).toBeInDocument();
// })

test("Should load input name inside Login component",()=>{
    render(<Browser />);
    const textName = screen.getByText("Browser");
    expect(textName).toBeInTheDocument();
})