import DefaultLayout from "@/components/Layout/DefaultLayout";
import { B1 } from "@/components/Elements/Typography";

export const metadata = {
  title: "Not Found | Nasta Footprint",
};

export default function NotFoundPage() {
  return (
    <DefaultLayout className="min-h-screen flex flex-col justify-center items-center">
      <B1 className="text-center">
        You caught us! This page is still under construction. Please check back
        later.
      </B1>
    </DefaultLayout>
  );
}
