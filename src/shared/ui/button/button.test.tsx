import Button from "./button";
import {render,screen} from "@testing-library/react";

describe('button',() => {
    test('render button', () => {
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()
    })
    test('button with clear theme',() => {
        render(<Button theme={'clear'}>test</Button>)
        expect(screen.getByText('test')).toHaveClass('clear')
        screen.debug()
    })
})