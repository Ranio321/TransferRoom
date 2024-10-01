import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import {
  IconButton,
  InputAdornment,
  SxProps,
  TextField,
  TextFieldProps,
  Theme,
} from "@mui/material";
import { useDebounceValue } from "usehooks-ts";

type TextSearchProps = Omit<TextFieldProps, "onChange" | "label"> & {
  onChange: ((value: string) => void) | Dispatch<SetStateAction<string>>;
  label: string;
  value: string;
  sx?: SxProps<Theme>;
};

export const TextSearch = ({
  onChange,
  label,
  value,
  ...rest
}: TextSearchProps) => {
  const [_value, setValue] = useState(value);
  const [debouncedValue] = useDebounceValue(_value, 500);

  useEffect(() => {
    if (debouncedValue !== value) {
      onChange(debouncedValue.trim() || "");
    }
    // this rule is disabled deliberately, because we don't want to call this hook when changing the onChange and value values
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <TextField
      variant="outlined"
      value={_value}
      autoComplete="off"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value || "");
      }}
      InputProps={{
        endAdornment:
          value !== "" ? (
            <InputAdornment position="end">
              <IconButton onClick={() => setValue("")} aria-label="Clear value">
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ) : null,
      }}
      fullWidth
      label={label}
      {...rest}
    />
  );
};
