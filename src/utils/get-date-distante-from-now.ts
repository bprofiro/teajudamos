import { formatDistanceToNow, parseISO } from 'date-fns';
import ptLocale from 'date-fns/locale/pt-BR';

export function getDateDistanceFromNow(date: string) {
  const formatDate = formatDistanceToNow(parseISO(date), {
    locale: ptLocale,
    addSuffix: true,
  });

  return formatDate;
}
