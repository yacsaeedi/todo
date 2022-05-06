import React, { FC, useState, useEffect } from "react";
import Select from 'react-select';

import ErrorMessage from "../ErrorMessage";
import styles from './SelectBox.module.scss';

export interface selectProps {
  itemList?: Array<any>
  htmlFor?: string;
  name?: string;
  handleChange?: any;
  label?: string;
  error?: string;
  touched?: any;
  onBlur?: any;
  value?: any;
  placeHolder?: string
}
const SelectBox: FC<selectProps> = ({
  itemList,
  htmlFor = "",
  name = "",
  handleChange,
  label,
  error,
  touched,
  onBlur,
  value,
  placeHolder,
  ...props }) => {
  const defaultValue = (itemList: any, value: any) => {
    return itemList ? itemList.find((item: any) => item.value === value) : "";
  }
  const customStyles = {
    option: () => ({
      display: "flex",
      justifyContent: "start",
      padding: ".5rem",
      fontFamily: "IranSans",
      fontSize: ".9rem",
      outline: 'none',
    }),
    indicatorsContainer: () => ({
      background: "transparent",
    }),
    dropdownIndicator: () => ({
      display: "flex",
      justifyContent: "center",
    }),
    control: (base: any, state: any) => ({
      ...base,
      borderColor: state.isFocused ? "transparent" : "transparent",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      // width: "100%",
      display: "flex",
      // borderRadius: "6px",
      border: "none",
      flex: 1,
      fontFamily: "IranSans",
      fontSize: ".78rem",
      textAlign: "start",
      padding: ".2rem 0rem",
      direction: "rtl",
      borderRadius: "6px",
      "&:hover": {
      }
    })
  };
  return (
    <label className={styles.container}>
      <span className={styles.label}>{label}</span>
      <Select
        options={itemList}
        className={styles.selectContainer}
        onChange={value => handleChange(value)}
        value={defaultValue(itemList, value)}
        placeholder={placeHolder}
        styles={customStyles}
      />
      <div className={styles.errorContainer}>
        {error && touched ? (<ErrorMessage error={error} />) : null}
      </div>
    </label>
  );
}
export default SelectBox;
