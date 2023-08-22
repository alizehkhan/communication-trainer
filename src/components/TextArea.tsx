import {
  FormEvent,
  Ref,
  TextareaHTMLAttributes,
  forwardRef,
  useState,
} from "react";

type TextAreaProps = {
  children: string;
  id: string;
  hint?: string;
  width?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = forwardRef(
  (props: TextAreaProps, ref?: Ref<HTMLTextAreaElement>) => {
    const { id, width, children, hint, ...restProps } = props;

    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const handleInvalid = (event: FormEvent<HTMLTextAreaElement>) => {
      event.preventDefault();
      setErrorMessage(event.currentTarget.validationMessage);
    };

    return (
      <div className={`w-full ${width}`}>
        <label className="mt-4 block text-lg font-bold" htmlFor={id}>
          {children}
        </label>
        {hint && (
          <span className="mt-1 block text-gray-600" id={`${id}-hint`}>
            {hint}
          </span>
        )}
        <div className={errorMessage && "border-l-4 border-red-700 pl-4"}>
          {errorMessage && (
            <span
              id={`${id}-error`}
              className="mt-2 block font-bold text-red-700"
            >
              {errorMessage}
            </span>
          )}
          <textarea
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
      </div>
    );
  },
);

export default TextArea;
