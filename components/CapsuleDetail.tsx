import { Card, Tag, Modal } from "antd";
import { useState } from "react";
export interface Capsule {
  capsule_id: string;
  capsule_serial: string;
  details: string;
  original_launch: string;
  missions: {
    name: string;
    flight: string;
  }[];
  original_launch_unix: string;
  reuse_count: string;
  status: string;
  type: string;
}

export default function CapsuleDetail({ item }: { item: Capsule }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const title = `${item.capsule_serial}${
    item.details ? `-${item.details}` : ""
  }`;
  const CardContent = (
    <>
      {item.original_launch && (
        <p>
          <b>Original Launch -</b>&nbsp;
          {new Date(item.original_launch).toDateString()}
        </p>
      )}
      {item.details && <p>{item.details}</p>}
      {item.type && <Tag>{item.type}</Tag>}
      {item.type && <Tag>{item.status}</Tag>}
    </>
  );
  return (
    <>
      <Card
        title={title}
        className="mb-4 max-w-[18rem] shadow cursor-pointer"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        {CardContent}
      </Card>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {CardContent}
      </Modal>
    </>
  );
}
