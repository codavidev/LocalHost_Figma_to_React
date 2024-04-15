import { FunctionComponent, useState, type CSSProperties } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./DateTimeContainer.module.css";

export type DateTimeContainerType = {
  label?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const DateTimeContainer: FunctionComponent<DateTimeContainerType> = ({
  label,
  propMinWidth,
}) => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.wrapper}>
        <DateTimePicker
          value={frameDateTimePickerValue}
          onChange={(newValue: any) => {
            setFrameDateTimePickerValue(newValue);
          }}
          sx={{
            fieldset: {
              borderColor: "#d9d9d9",
              borderTopWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              borderLeftWidth: 1,
            },
            "&:hover": {
              fieldset: { borderColor: "#d9d9d9" },
              ".MuiOutlinedInput-notchedOutline": { borderColor: "#d9d9d9" },
            },
            "& input::placeholder": {
              textColor: "rgba(0, 0, 0, 0.85)",
              fontSize: 14,
            },
            input: {
              color: "rgba(0, 0, 0, 0.85)",
              fontSize: 14,
              textAlign: "left",
              fontWeight: "400",
            },
            "& .MuiInputBase-root": {
              backgroundColor: "#fff",
              height: 64,
              gap: "8px",
              flexDirection: { flexDirection: "row" },
            },
          }}
          slotProps={{
            textField: {
              size: "medium",
              fullWidth: false,
              required: false,
              autoFocus: false,
              error: false,
              color: "primary",
              placeholder: "Check-in",
            },
            openPickerIcon: {
              component: () => (
                <img
                  width="30px"
                  height="30px"
                  src="/calendartodayfilled.svg"
                />
              ),
            },
          }}
        />
      </div>
    </LocalizationProvider>
  );
};

export default DateTimeContainer;
