import { Menu } from 'lucide-react'

import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet'
import { Sidebar } from '@/components/sidebar'

export const MobileSidebar= () => {
  return (
      <Sheet>
          <SheetTrigger>
              <Menu className='text-white' />
          </SheetTrigger>
            <SheetTitle ></SheetTitle>
            <SheetContent className='p-0 z-[100]' side='left' title='test'>
                <Sidebar />
            </SheetContent>
      </Sheet>

  )
}