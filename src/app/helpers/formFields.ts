import Input from "../components/Input";
import TextArea from "../components/TextArea";

export const formFields = [
  { id: "name", name: "name", type: "text", component: Input },
  { id: "email", name: "email", type: "email", component: Input },
  { id: "message", name: "message", type: "textarea", component: TextArea },
];
