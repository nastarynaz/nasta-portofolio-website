import DefaultLayout from "@/components/Layout/DefaultLayout";
import { H2, B1 } from "@/components/Elements/Typography";

export default function Careers() {
  return (
    <DefaultLayout>
      <div className="h-[1px] mb-[20px] bg-red-500" />
      <div>
        <H2>Careers</H2>
        <B1>A glimpse of my career journey.</B1>
      </div>
    </DefaultLayout>
  );
}
