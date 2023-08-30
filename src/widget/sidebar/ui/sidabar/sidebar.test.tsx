import {fireEvent, screen} from "@testing-library/react";
import Sidebar from "./sidebar";
import {renderWithTranslation} from "@/shared/lib/tests/render-with-translation/render-with-translation";

describe('Sidebar', () => {
    test('sidebar' , () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Toggle Sidebar' , () => {
        renderWithTranslation(<Sidebar/>)
        const toggleBtn = screen.queryByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})