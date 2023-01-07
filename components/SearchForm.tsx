import { Button, Form } from "antd";
import OriginalLaunch from "./OriginalLaunch";
import Statues from "./Statuses";
import Types from "./Types";

export interface SearchProps {
  type: string;
  status: string;
  original_launch: string;
}
interface Props {
  onFinish: (val: SearchProps) => any;
  defaultValues?: {
    type: string;
    status: string;
  };
}
export default function SearchForm({ onFinish, defaultValues }: Props) {
  return (
    <Form
      initialValues={
        defaultValues || { status: "", type: "", original_launch: "" }
      }
      onFinish={onFinish}
      name="search"
      className="flex flex-col lg:flex-row gap-4 lg:gap-10 flex-wrap w-full"
    >
      <Statues />
      <Types />
      <OriginalLaunch />
      <Button
        type="primary"
        size="large"
        htmlType="submit"
        className="bg-[#4096ff]"
      >
        Search
      </Button>
    </Form>
  );
}
