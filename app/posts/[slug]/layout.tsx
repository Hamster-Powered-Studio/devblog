import Layout from "../../../components/Layout/Layout";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout title={""}>{children}</Layout>;
}
