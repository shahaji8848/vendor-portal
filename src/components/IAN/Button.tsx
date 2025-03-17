import { useFrappePostCall } from "frappe-react-sdk";
import { Dropdown } from "primereact/dropdown";
import React, { useEffect, useState } from "react";

const Button = ({ data, mutate }: any) => {
  const [show, setShow] = useState(false);
  const { call } = useFrappePostCall("frappe.model.workflow.get_transitions");
  const { call: callForSubmit } = useFrappePostCall(
    "frappe.model.workflow.apply_workflow"
  );
  const actionValues = ["Submit"];
  useEffect(() => {
    if (data?.workflow_state === "Draft") {
      call({ doc: data }).then(
        (res) => res.message[0].action === "Submit" && setShow(true)
      );
    }
  }, []);
  const handleActionChange = (e: any) => {
    console.log(e?.value);
    if (e.value === "Submit") {
      callForSubmit({
        doc: data,
        action: "Submit",
      }).then((res) => {
        res?.message?.workflow_state === "Pending for Level 1 Approval"
          ? setShow(false)
          : "";
      });
    }
  };
  return (
    <div>
      {show ? (
        <Dropdown
          value={show}
          onChange={handleActionChange}
          options={actionValues}
          optionLabel="name"
          placeholder="Action"
          className=""
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Button;
