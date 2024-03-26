import { FieldProps } from "formik";

interface FormikSelectProps extends FieldProps {
  className?: string;
  classInput?: string;
  classLabel?: string;
  disabled?: boolean;
  label?: string;
  name: string;
  placeholder?: string;
  type?: string;
  min?: number;
  icon?: React.ReactElement;
}

export default function Input({
  label,
  field,
  form,
  placeholder = " ",
  className = "",
  classInput = "",
  classLabel = "",
  type = "text",
  min = 1,
  icon,
}: FormikSelectProps) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue(field.name, event.target.value);
  };

  const input = (
    <input
      type={type}
      id={field.name ? "input-" + field.name : undefined}
      className={`input w-full peer ${icon ? "ps-10" : ""} ${classInput}`}
      placeholder={placeholder}
      onChange={onChange}
      value={field.value}
      min={min}
    />
  );
  if (label) {
    return (
      <div className={`w-full relative text-[0.875rem] ${className}`}>
        {input}
        <label
          htmlFor={"input-" + field.name}
          className={`${
            field.value
              ? "scale-75 -translate-y-full text-base-content/70 text-[1.1rem]"
              : "peer-focus:scale-75 peer-focus:-translate-y-full peer-focus:text-base-content/70 peer-focus:text-[1.1rem]"
          } absolute duration-300 transform top-3 origin-[50%_0] px-2 bg-base-100 start-1 ${classLabel}`}
        >
          {label}
        </label>
        {icon && (
          <span className="absolute start-3 top-3.5 w-4 h-4 text-base-content/50">
            {icon}
          </span>
        )}
      </div>
    );
  }
  return input;
}
