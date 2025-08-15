import { useState } from 'react';

import {
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  Root,
} from '@radix-ui/react-dropdown-menu';
import { format } from 'date-fns';

import { CalendarIcon } from '@/shared/ui/icons/calendar';

import { Calendar, type CalendarProps } from '../calendar';
import st from './DropdownCalendar.module.scss';

export const DropdownCalendar = ({ onChange, value }: CalendarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className={st.trigger}>
        <CalendarIcon />
        {value ? format(value, 'dd/MM/yy') : 'YY/MM/DD'}
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent sideOffset={10}>
          <Calendar value={value} onChange={onChange} />
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </Root>
  );
};
