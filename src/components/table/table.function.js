import { range } from '../../core/utils';

export function shouldResize(event) {
  return event.target.dataset.resize;
}

export function isCell(event) {
  return event.target.dataset.type === 'cell';
}

export function matrix($target, $current) {
  const target = $target.id(true);
  const current = $current.id(true);
  const cols = range(current.col, target.col);
  const rows = range(current.row, target.row);
  return cols.reduce((acc, col) => {
    rows.forEach((row) => acc.push(`${row}:${col}`));
    return acc;
  }, []);
}

export function nextSelector(key, col, row) {
  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row + 1 > 19 ? row : row++;
      break;
    case 'Tab':
    case 'ArrowRight':
      col + 1 > 25 ? col : col++;
      break;
    case 'ArrowLeft':
      col - 1 < 0 ? col : col--;
      break;
    case 'ArrowUp':
      row - 1 < 0 ? row : row--;
      break;
  }
  return `[data-id="${row}:${col}"]`;
}
