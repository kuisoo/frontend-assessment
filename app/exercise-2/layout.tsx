import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filta| Exercise 2",
};

export default function ExerciseTwoPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
