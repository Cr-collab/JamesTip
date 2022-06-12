import { toast } from "react-toastify";

interface IReuseMessageBox {
  type: "error" | "success";
  msn: string;
  theme?: "colored" | "dark" | "light";
}

export function ReuseMessageBox({msn, type , theme = "colored" }: IReuseMessageBox) {
  toast[type](msn, {
    theme: theme,
  });
}
