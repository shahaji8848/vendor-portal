import { ProgressSpinner } from "primereact/progressspinner";

export const numberFormatter = (number: number) => {
  return number?.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const textFormatPercentageWise = (text: any) => {
  return text ? numberFormatter(text) + "%" : "-";
};

export const textFormatNumberWise = (text: any) => {
  return text ? numberFormatter(text) : "-";
};

export default function Loader() {
  return (
    <div className="text-center">
      <div className="card">
        <ProgressSpinner
          style={{ width: "50px", height: "50px" }}
          strokeWidth="8"
          fill="var(--surface-ground)"
          animationDuration=".5s"
        />
      </div>
    </div>
  );
}

export function formatDate(dateString: any) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
