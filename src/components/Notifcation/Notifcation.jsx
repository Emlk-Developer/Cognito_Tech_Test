import React from 'react'
import * as Toast from '@radix-ui/react-toast';

export default function Notification({notification, onChange}) {
  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root className="ToastRoot" open={notification} onOpenChange={onChange}>
        <Toast.Description className="ToastDescription">Product was added to basket</Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  )
}
