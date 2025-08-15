'use client';

import { type ReactNode, useId, useState } from 'react';

import { type CheckboxProps, Indicator, Root } from '@radix-ui/react-checkbox';

import { cn } from '@/shared/lib/utils/cn';
import { CheckIcon } from '@/shared/ui/icons/check';

import st from './Checkbox.module.scss';

type CheckboxOption = {
  label: React.ReactNode;
  value: string;
};

export const CheckboxGroup = (
  props:
    | {
        multiple?: true;
        options: CheckboxOption[];
        value?: string[];
        defaultValue?: string[];
        onChange?: (values: string[]) => void;
        intent?: 'default' | 'danger';
      }
    | {
        multiple: false;
        options: CheckboxOption[];
        value?: string;
        defaultValue?: string;
        onChange?: (value: string) => void;
        intent?: 'default' | 'danger';
      }
) => {
  const multiple = props.multiple !== false;

  const [internalValue, setInternalValue] = useState(
    multiple ? props.defaultValue || [] : props.defaultValue || ''
  );

  const selectedValues = props.value ?? internalValue;

  const handleCheckedChange = (checked: boolean, optionValue: string) => {
    if (multiple) {
      const newValues = checked
        ? [...(selectedValues as string[]), optionValue]
        : (selectedValues as string[]).filter((v) => v !== optionValue);

      if (!props.value) setInternalValue(newValues);
      props.onChange?.(newValues);
    } else {
      const newValue = checked ? optionValue : '';
      if (!props.value) setInternalValue(newValue);
      props.onChange?.(newValue);
    }
  };

  return (
    <div className={st.checkboxGroup}>
      {props.options.map((option) => (
        <Checkbox
          key={option.value}
          label={option.label}
          checked={
            multiple
              ? (selectedValues as string[]).includes(option.value)
              : selectedValues === option.value
          }
          onCheckedChange={(checked) => handleCheckedChange(checked as boolean, option.value)}
          intent={props.intent}
        />
      ))}
    </div>
  );
};

export const Checkbox = ({
  label,
  onCheckedChange,
  checked = false,
  id,
  intent = 'default',
  ...props
}: {
  label?: ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  id?: string;
  intent?: 'default' | 'danger';
} & CheckboxProps) => {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;

  return (
    <div className={st.wrapper}>
      <Root
        className={cn(st.checkbox, intent === 'danger' ? st.danger : st.default)}
        id={checkboxId}
        checked={checked}
        onCheckedChange={onCheckedChange}
        {...props}
      >
        <Indicator className={st.indicator}>
          <CheckIcon />
        </Indicator>
      </Root>
      <label htmlFor={checkboxId}>
        <p className={st.label}>{label}</p>
      </label>
    </div>
  );
};
