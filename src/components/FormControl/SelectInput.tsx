import { Option } from "@/interfaces";
import clsx from "clsx";
import { FieldProps } from "formik";
import { useTranslations } from "next-intl";
import Select, {
  ControlProps,
  GetOptionLabel,
  OnChangeValue,
  Options,
  components,
} from "react-select";

const controlStyles = {
  base: "select select-bordered w-full ps-0 pe-8 leading-[normal]",
};
const containerStyle = "w-full ";
const placeholderStyles = "text-base-content pl-1 py-0.5";
const selectInputStyles = "pl-1 py-0.5";
const valueContainerStyles = "ps-3 pe-1 gap-1 !flex-nowrap";
const singleValueStyles = "leading-7 ml-1";
const multiValueStyles =
  "bg-base-200 rounded-lg items-center py-0.5 pl-2 pr-1 gap-1.5 !min-w-min";
const multiValueLabelStyles = "leading-6 py-0.5";
const multiValueRemoveStyles =
  "bg-base-conetnt/10 hover:border-base-conetnt/10 rounded-md";
// const indicatorsContainerStyles = "p-1 gap-1";
const clearIndicatorStyles = "text-base-conetnt/10 p-1 rounded-md";
const indicatorSeparatorStyles = "bg-base-content/20";
const dropdownIndicatorStyles =
  "p-1 text-base-conetnt/10 rounded-md hover:text-base-content/50";
const menuStyles =
  "p-1 mt-2 border border-base-content/10 bg-base-100 rounded-lg text-sm z-[]";
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-base-conetnt/10";
const optionStyles = {
  base: "hover:cursor-pointer px-3 py-2 rounded flex items-center",
  focus: "bg-base-200 active:bg-base-200",
  selected:
    "after:content-['✔'] after:inline-block after:ms-1 after:ml-2 after:text-green-500 text-base-conetnt/10",
};
const noOptionsMessageStyles =
  "text-base-conetnt/30 p-2 bg-base-200 rounded-sm";
const loadingMessageStyle = "text-base-conetnt/30 p-2 bg-base-200 rounded-sm";

interface FormikSelectProps extends FieldProps {
  options: Options<Option>;
  isMulti?: boolean;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  label: string;
  formatOptionLabel?: (data: any) => React.ReactNode;
  getOptionLabel: GetOptionLabel<any>;
}

const Control = ({ children, ...props }: ControlProps) => {
  const value =
    props.isFocused ||
    (typeof props.selectProps.value === "object" &&
      props.selectProps.value !== null &&
      !Array.isArray(props.selectProps.value))
      ? true
      : false;

  const valueArr =
    props.isFocused ||
    (Array.isArray(props.selectProps.value) &&
      props.selectProps.value.length > 0)
      ? true
      : false;

  return (
    <components.Control {...props}>
      <label
        htmlFor={"select-" + props.selectProps.name}
        className={`${
          value || valueArr
            ? "scale-75 text-base-content/70 -translate-y-full text-[1.1rem]"
            : ""
        } absolute duration-300 transform top-3 origin-[50%_0] px-2 bg-base-100 start-1 
          `}
      >
        {props.selectProps["aria-label"]}
      </label>

      {children}
    </components.Control>
  );
};

export default function SelectInput({
  placeholder = "",
  className,
  field,
  form,
  options,
  isMulti = false,
  disabled,
  label,
  formatOptionLabel,
  getOptionLabel,
}: FormikSelectProps) {
  const t = useTranslations();
  const onChange = (option: OnChangeValue<Option | Option[], boolean>) => {
    form.setFieldValue(
      field.name,
      isMulti
        ? (option as Option[]).map((item: Option) => item)
        : (option as Option).value
    );
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter((option) => field.value?.includes(option))
        : options.find((option) => option.value === field.value);
    } else {
      return isMulti ? [] : ("" as any);
    }
  };

  return (
    <div className="w-full relative">
      <Select
        inputId={"select-" + field.name}
        name={field.name}
        options={options}
        value={getValue()}
        onChange={onChange}
        isMulti={isMulti}
        placeholder={placeholder}
        isDisabled={disabled}
        classNamePrefix="select"
        className={className}
        aria-label={label}
        unstyled
        closeMenuOnSelect={isMulti ? false : true}
        formatOptionLabel={formatOptionLabel}
        noOptionsMessage={() => t("Basic.noOption")}
        getOptionLabel={getOptionLabel}
        components={{ Control }}
        styles={{
          control: (base, state) => ({
            ...base,
            outlineOffset: 2,
            outline: state.isFocused
              ? "2px solid var(--fallback-bc,oklch(var(--bc)/0.2))"
              : "",
          }),
        }}
        classNames={{
          control: () => controlStyles.base,
          container: () => containerStyle,
          placeholder: () => placeholderStyles,
          input: () => selectInputStyles,
          valueContainer: () => valueContainerStyles,
          singleValue: () => singleValueStyles,
          multiValue: () => multiValueStyles,
          multiValueLabel: () => multiValueLabelStyles,
          multiValueRemove: () => multiValueRemoveStyles,
          indicatorsContainer: () => "!hidden",
          clearIndicator: () => clearIndicatorStyles,
          indicatorSeparator: () => indicatorSeparatorStyles,
          dropdownIndicator: () => dropdownIndicatorStyles,
          menu: () => menuStyles,
          groupHeading: () => groupHeadingStyles,
          option: ({ isFocused, isSelected }) =>
            clsx(
              isFocused && optionStyles.focus,
              isSelected && !getOptionLabel && optionStyles.selected,
              optionStyles.base
            ),
          noOptionsMessage: () => noOptionsMessageStyles,
          loadingMessage: () => loadingMessageStyle,
        }}
      />
    </div>
  );
}
