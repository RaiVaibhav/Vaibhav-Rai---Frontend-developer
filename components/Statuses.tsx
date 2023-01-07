import { useQuery } from "react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../pages/_app";
import { Select, Form } from "antd";
import { capitalizeFirstLetter, filteredData } from "../util";

const fetchStatus = async () => {
  const res = await axios(
    "https://api.spacexdata.com/v3/capsules?filter=status"
  );
  return res.data;
};

export default function Statues() {
  const { isLoading, isFetching, error, data } = useQuery(
    "statuses",
    fetchStatus
  );
  const { toggleLoading } = useContext(LoadingContext);

  useEffect(() => {
    toggleLoading(isLoading);
  }, [isLoading]);

  if (isLoading) {
    return null;
  }
  const filteredValues = data ? filteredData(data, "status") : [];
  return (
    <Form.Item name="status" label="Status">
      <Select
        loading={isLoading || isFetching}
        size="large"
        className="w-full min-w-[200px]"
        options={filteredValues
          .map((i: { status: string }) => {
            return { value: i.status, label: capitalizeFirstLetter(i.status) };
          })
          .concat({
            value: "",
            label: "None",
          })}
      />
    </Form.Item>
  );
}
