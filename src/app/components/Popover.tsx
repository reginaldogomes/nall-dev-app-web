'use client'

import * as Popover from '@radix-ui/react-popover'

export const PopoverC = () => {
  return (
    <>
      <Popover.Root>
        <Popover.Trigger>More info</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
            <h1 className='text-3xl font-bold underline'>Reginaldo Gomes</h1>
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  )
}
