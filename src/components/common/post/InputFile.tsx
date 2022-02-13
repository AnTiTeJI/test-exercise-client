import { forwardRef } from "react";

interface InputFIleProps {
  setImage: (value: string) => void;
}

const InputFile = forwardRef<HTMLInputElement, InputFIleProps>(
  ({ setImage }, ref) => {
    return (
      <input
        ref={ref}
        type="file"
        onChange={(e) => {
          const reader = new FileReader();
          reader.addEventListener("load", (e) => {
            if (e.target?.result) setImage(e.target?.result as string);
          });
          if (e.target.files) reader.readAsDataURL(e.target.files[0]);
        }}
      />
    );
  }
);
InputFile.displayName = "InputFile";
export default InputFile;
