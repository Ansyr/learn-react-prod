import {fireEvent, screen} from "@testing-library/react";
import Sidebar from "@/widget/sidebar/ui/sidabar/sidebar";
import {renderWithTranslation} from "@/shared/lib/tests/render-with-translation/render-with-translation";

describe('Sidebar', () => {
    test('Sidebar' , () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Toggle Sidebar' , () => {
        renderWithTranslation(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})