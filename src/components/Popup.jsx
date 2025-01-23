import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
// import PostProduct from "./PostProduct";
import { MdCancel } from "react-icons/md";

export default function PopUp({ children,title,titlePupup }) {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className="bg-orange-500 w-[15%] text-center items-center text-white font-bold px-5 py-2 rounded-lg "
      >
        {title}
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-orange-200 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="mt-4 flex flex-row-reverse justify-between">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-400 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  <MdCancel />
                </Button>
                <DialogTitle
                  as="h3"
                  className="font-medium text-black text-2xl"
                >
                 {titlePupup}
                </DialogTitle>
              </div>

              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
