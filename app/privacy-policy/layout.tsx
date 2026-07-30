import PageShell from "@/components/shared/PageShell";

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageShell>{children}</PageShell>
  );
}
