import { useFrappePostCall } from "frappe-react-sdk";

const IanBanner = ({ data }: any) => {
  const dataForBanner = [
    // {
    //  level : "Pending",
    //  state: !data?.level  ? "Draft" : "Approved" ,
    //  date: "since 24-08-2024",
    //  name: "",
    // },
    {
      level: "Level 1",
      state:
        data?.level === "Level 1"
          ? data?.workflow_state
          : data?.level === "Level 2" || data.level === "Level 3"
          ? "Approved"
          : "Pending",
      date: "since 24-08-2024",
      name: data?.approver_1,
    },
    {
      level: "Level 2",
      state:
        data?.level === "Level 2"
          ? data?.workflow_state
          : data?.level === "Level 1"
          ? "Pending"
          : data.level === "Level 3"
          ? "Approved"
          : "Pending",
      date: "since 24-08-2024",
      name: data?.approver_2,
    },
    {
      level: "Approved and Final Release",
      state:
        data?.level === "Level 3"
          ? data?.workflow_state
          : data?.level === "Level 1"
          ? "Pending"
          : data.level === "Level 2"
          ? "Pending"
          : "Pending",
      date: "since 24-08-2024",
      name: "",
    },
    {
      level: "PR & PI Approval Pending",
      state:
        data?.level === "Level 3"
          ? data?.workflow_state
          : data?.level === "Level 1"
          ? "Pending"
          : data.level === "Level 2"
          ? "Pending"
          : "Pending",
      date: "since 24-08-2024",
      name: data?.pr_pi_approver,
    },
    {
      level: "PR & PI Approved",
      state:
        data?.level === "Level 3"
          ? data?.workflow_state
          : data?.level === "Level 1"
          ? "Pending"
          : data.level === "Level 2"
          ? "Pending"
          : "Pending",
      date: "since 24-08-2024",
      name: "",
    },
    {
      level: "Payment Status",
      state:
        data?.level === "Level 3"
          ? data?.workflow_state
          : data?.level === "Level 1"
          ? "Pending"
          : data.level === "Level 2"
          ? "Pending"
          : "Pending",
      date: "since 24-08-2024",
      name: "",
    },
  ];

  return (
    <>
      <div className="block-content">
        <div className="surface-section px-4 py-2 md:px-2">
          <h6 className="m-2">Status</h6>
          {/* <div className="flex align-items-center text-700 mb-3">
          <span className="inline-flex align-items-center mr-5">
            <i className="pi pi-eye mr-2">3232 views</i>
          </span>
          <span className="inline-flex align-items-center mr-5">
            <i className="pi pi-comments mr-2">209 Comments</i>
          </span>
        </div> */}
          <ul className="list-none p-0 m-0 surface-100 flex overflow-y-hidden overflow-x-auto border-round">
            {/* <li className="relative py-3 pl-2 pr-3 flex flex-column justify-content-center">
            <div className='text-base font-medium text-900 mb-1"'>Status</div>
            <span className="text-600 white-space-nowrap text-sm"></span>
          </li> */}
            {dataForBanner.map((item: any, index: any) => (
              <li
                className="relative py-3 pl-6 pr-1 flex flex-column justify-content-between"
                key={index}
              >
                <div
                  className="absolute left-0 top-0 z-1"
                  style={{
                    borderLeft: "25px solid var(--surface-100)",
                    borderTop: "45px solid transparent",
                    borderBottom: "45px solid transparent",
                    width: "0px",
                    height: "0px",
                  }}
                ></div>
                <div className="text-xs font-medium text-900 mb-1">
                  {item?.level}
                </div>
                <span
                  className={`text-600 white-space-nowrap text-${
                    item?.state === "Approved"
                      ? "green"
                      : item?.state === "Pending"
                      ? "orange"
                      : "cyan"
                  }-500 text-xs`}
                >
                  {item?.state}
                  {/* {item.date} */}
                </span>
                <span className="text-600 white-space-nowrap text-xs">
                  {item?.name}
                </span>
                <div
                  className="absolute top-0"
                  style={{
                    left: "1px",
                    borderLeft: "25px solid var(--surface-300)",
                    borderTop: "45px solid transparent",
                    borderBottom: "45px solid transparent",
                    width: "0px",
                    height: "0px",
                  }}
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default IanBanner;
