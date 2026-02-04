import { ReactNode } from "react";

export function FormFieldsLayout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className="rounded-8px col-span-2 space-y-6 bg-white p-4">
      <h3 className="text-sm font-semibold md:text-base">{title}</h3>

      <div className="space-y-4">{children}</div>
    </div>
  );
}
