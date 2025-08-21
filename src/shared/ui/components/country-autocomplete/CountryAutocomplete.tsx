'use client';

import { useEffect, useRef, useState } from 'react';

import { allowedCountries } from '@/shared/lib/countries';

import { TextField } from '../../kit/text-field';
import st from './CountryAutocomplete.module.scss';

export const CountryAutocomplete = ({
  placeholder,
  onChange,
  disabled,
  initialValue = '',
  hint,
  label,
}: {
  onChange?: (value: string) => void;
  initialValue?: string;
  placeholder?: string;
  disabled?: boolean;
  intent?: 'primary' | 'danger';
  variant?: 'primary' | 'secondary';
  label?: string;
  hint?: string;
}) => {
  const [search, setSearch] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);

  const autocompleteRef = useRef<HTMLDivElement>(null);

  const items = Object.entries(allowedCountries).map(([value, label]) => ({
    value,
    label: label.name,
  }));

  const filteredItems = search
    ? items.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()))
    : [];

  const handleSelect = (label: string) => {
    setSearch(label);
    onChange?.(label);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (autocompleteRef.current && !autocompleteRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={autocompleteRef} className={st.layout}>
      <TextField
        label={label}
        value={search}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => {
          setSearch(e.target.value);
          onChange?.(e.target.value);
          setIsOpen(true);
        }}
        hint={hint}
      />
      {isOpen && search && (
        <ul className={st.dropdown}>
          {filteredItems.length ? (
            filteredItems.map((item) => (
              <li key={item.value} onClick={() => handleSelect(item.label)} className={st.item}>
                <p>{item.label}</p>
              </li>
            ))
          ) : (
            <div className={st.noResults}>
              <p>No Results</p>
            </div>
          )}
        </ul>
      )}
    </div>
  );
};
