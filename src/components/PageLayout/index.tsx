type Props = {
  children?: React.ReactNode;
  button?: React.ReactNode;
  title: string;
};

export default function PageLayout({ children, title, button }: Props) {
  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6">
        <h4 className="card-title">{title}</h4>
        {button && button}
      </div>
      <div className="card-body p-0">{children}</div>
    </div>
  );
}
