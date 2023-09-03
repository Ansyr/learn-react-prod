import {fireEvent, screen} from "@testing-library/react";
import Sidebar from "./sidebar";
import {ComponentRender} from "@/shared/lib/tests/component-render/component-render";

describe('Sidebar', () => {
    test('sidebar' , () => {
        ComponentRender(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Toggle Sidebar' , () => {
        ComponentRender(<Sidebar/>)
        const toggleBtn = screen.queryByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})