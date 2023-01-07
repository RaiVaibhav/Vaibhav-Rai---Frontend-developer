import { useQuery } from "react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../pages/_app";
import { Select, Form } from "antd";
import { filteredData, timeToDateString } from "../util";

const fetchStatus = async () => {
  const res = await axios(
    "https://api.spacexdata.com/v3/capsules?filter=original_launch"
  );
  return res.data;
};

export default function OriginalLaunch() {
  const { isLoading, isFetching, error, data } = useQuery(
    "launch",
    fetchStatus
  );
  const { toggleLoading } = useContext(LoadingContext);

  useEffect(() => {
    toggleLoading(isLoading);
  }, [isLoading]);

  if (isLoading) {
    return null;
  }
  const filteredValues = data ? filteredData(data, "original_launch") : [];
  return (
    <Form.Item name="original_launch" label="Original Launch">
      <Select
        loading={isLoading || isFetching}
        size="large"
        className="w-full min-w-[200px]"
        options={filteredValues
          .map((i: { original_launch: string }) => {
            return {
              value: i.original_launch,
              label: timeToDateString(i.original_launch),
            };
          })
          .concat({
            value: "",
            label: "None",
          })}
      />
    </Form.Item>
  );
}
