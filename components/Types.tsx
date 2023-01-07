import { useQuery } from "react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../pages/_app";
import { Select, Form } from "antd";
import { capitalizeFirstLetter, filteredData } from "../util";

const fetchStatus = async () => {
  const res = await axios("https://api.spacexdata.com/v3/capsules?filter=type");
  return res.data;
};

export default function Types() {
  const { isLoading, isFetching, error, data } = useQuery("types", fetchStatus);
  const { toggleLoading } = useContext(LoadingContext);

  useEffect(() => {
    toggleLoading(isLoading);
  }, [isLoading]);

  const filteredValues = data ? filteredData(data, "type") : [];
  return (
    <Form.Item name="type" label="Type">
      <Select
        loading={isLoading || isFetching}
        size="large"
        className="w-full min-w-[200px]"
        options={filteredValues
          .map((i: { type: string }) => {
            return { value: i.type, label: capitalizeFirstLetter(i.type) };
          })
          .concat({
            value: "",
            label: "None",
          })}
      />
    </Form.Item>
  );
}
