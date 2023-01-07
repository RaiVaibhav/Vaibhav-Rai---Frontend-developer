import { List, Button } from "antd";
import { useQuery } from "react-query";
import SearchForm, { SearchProps } from "./SearchForm";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../pages/_app";
import CapsuleDetail, { Capsule } from "./CapsuleDetail";

const fetchList = async (params: SearchProps) => {
  const res = await axios.get("https://api.spacexdata.com/v3/capsules", {
    params: params,
  });
  return res.data;
};

export default function SearchList() {
  const defaultLimit = 10;
  const [limit, setLimit] = useState(defaultLimit);
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [originalLaunch, setOriginalLaunch] = useState("");
  const { toggleLoading } = useContext(LoadingContext);
  const { isLoading, isFetching, data } = useQuery(
    ["list", status, type, limit, originalLaunch],
    () =>
      fetchList(
        Object.assign(
          {},
          { type, status, limit, original_launch: originalLaunch }
        )
      )
  );
  useEffect(() => {
    toggleLoading(isLoading);
  }, [isLoading]);

  const loadMore =
    !isLoading && !(data.length < limit) ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button type="dashed" onClick={() => setLimit(limit + defaultLimit)}>
          Load more
        </Button>
      </div>
    ) : null;
  return (
    <>
      <SearchForm
        onFinish={({ status, type, original_launch }) => {
          setType(type);
          setStatus(status);
          setOriginalLaunch(original_launch);
        }}
        defaultValues={{
          status,
          type,
        }}
      />
      <br />
      <List
        loading={isLoading || isFetching}
        loadMore={loadMore}
        dataSource={data || []}
        renderItem={(item: Capsule) => (
          <CapsuleDetail key={item.capsule_serial} item={item} />
        )}
      />
    </>
  );
}
