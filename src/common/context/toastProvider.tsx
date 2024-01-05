import { ToastContainer } from "react-toastify";

export default function ToastProvider({ children }: Props) {
  return (
    <>
      {children}
      <ToastContainer theme="colored" />
    </>
  );
}

interface Props {
  children: React.ReactNode;
}
