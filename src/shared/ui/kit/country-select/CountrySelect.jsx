import { useLenis } from 'lenis/react';
import Select from 'react-select';
import { filteredCountries } from '@/shared/lib/helpers/excludedCountries';
import { components } from 'react-select';

function CountrySelect({ field, ...props }) {
  const lenis = useLenis();

  const handleMenuOpen = () => {
    if (lenis) {
      lenis.stop();
    }
  };

  const handleMenuClose = () => {
    if (lenis) {
      lenis.start();
    }
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: '100%',
      color: '#fff',
      height: '52px',
      borderRadius: '24px',
      background: '#1b1c1e',
      border: '1px solid #1b1c1e',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.2',
      textAlign: 'left',
      padding: '0 16px',
      boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.1)',
      '&:hover': {
        borderColor: '#1b1c1e',
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: '52px',
      margin: '0',
      padding: '0',
      border: 'none',
    }),
    input: (provided) => ({
      ...provided,
      height: '52px',
      margin: '0',
      padding: '0',
      border: 'none',
      color: '#fff',
      backdropFilter: 'none',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#fff',
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      '> span': {
        display: 'none',
      },
      '> div': {
        padding: '0',
        width: '24px',
        height: '24px',

        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      },
      '> div > svg': {
        display: 'none',
      },
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      padding: '0',
    }),
    menu: (provided) => ({
      ...provided,

      background: '#1b1c1e',
      display: 'block',
      '> div': {
        '&::-webkit-scrollbar': {
          background: 'transparent',
          width: '8px',
        },

        '&::-webkit-scrollbar-track': {
          background: '#1b1c1e',
        },

        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#2583ff',
          borderRadius: '100px',
        },
      },
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? '#1b1c1e' : '#1b1c1e',
      color: '#fff',
      '&:hover': {
        background: '#2583ff',
        color: '#ffffff',
      },
    }),
  };

  return (
    <Select
      {...field}
      options={filteredCountries}
      value={filteredCountries.find((c) => c.value === field.value) || null} // <- додаємо
      onChange={(option) => field.onChange(option?.value ?? '')}
      styles={customStyles}
      onMenuOpen={handleMenuOpen}
      onMenuClose={handleMenuClose}
      {...props}
      components={{ MenuList }}
    />
  );
}

export default CountrySelect;

const MenuList = (props) => {
  return (
    <components.MenuList
      {...props}
      innerProps={{
        ...props.innerProps,
        onWheel: (e) => {
          e.stopPropagation();
          if (props.innerProps.onWheel) {
            props.innerProps.onWheel(e);
          }
        },
      }}
    />
  );
};
