import PageShell from "@/components/shared/PageShell";

export default function TermsOfUseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageShell>{children}</PageShell>
  );
}
