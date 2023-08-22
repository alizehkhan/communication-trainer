import {
  FormEvent,
  InputHTMLAttributes,
  Ref,
  forwardRef,
  useEffect,
  useState,
} from "react";

type InputProps = {
  children: string;
  id: string;
  customErrorMessage?: string;
  hint?: string;
  width?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef((props: InputProps, ref?: Ref<HTMLInputElement>) => {
  const { id, children, width, hint, customErrorMessage, ...restProps } = props;

  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  useEffect(() => setErrorMessage(customErrorMessage), [customErrorMessage]);

  const handleInvalid = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setErrorMessage(event.currentTarget.validationMessage);
  };

  return (
    <div className={`w-full ${width}`}>
      <label className="mt-4 block text-lg font-bold" htmlFor={id}>
        {children}
      </label>
      {hint && <span id={`${id}-hint`}>{hint}</span>}
      {errorMessage && (
        <span id={`${id}-error`} className="block font-bold text-red-700">
          {errorMessage}
        </span>
      )}
      <input
        className="mt-2 block w-full rounded-md border-2 border-solid border-gray-400 p-3 text-xl hover:border-gray-500 focus:outline focus:outline-4 focus:outline-gray-300"
        aria-describedby={`${id}-error`}
        id={id}
        name={id}
        autoComplete="off"
        onInvalid={handleInvalid}
        onInput={() => setErrorMessage("")}
        ref={ref}
        {...restProps}
      />
    </div>
  );
});

export default Input;
