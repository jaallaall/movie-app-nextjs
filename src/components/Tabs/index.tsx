type Props = {
  children: React.ReactNode;
  label: string;
  id: string;
  checked?: boolean;
};

export default function Tabs({ children }: { children: React.ReactNode }) {
  return (
    <div role="tablist" className="tabs tabs-bordered">
      {children}
    </div>
  );
}

export function TabContent({ children, label, id, checked }: Props) {
  return (
    <>
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab !py-2 !px-0 h-auto text-lg whitespace-nowrap me-5"
        id={id}
        aria-label={label}
        defaultChecked={checked}
      />

      <div
        role="tabpanel"
        className="tab-content pt-5 border-t border-t-base-content/10 transition-opacity duration-300 ease-in-out"
      >
        {children}
      </div>
    </>
  );
}
