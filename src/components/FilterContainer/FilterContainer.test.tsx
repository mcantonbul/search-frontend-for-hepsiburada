/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from '@testing-library/react';
import { IFilterContainer } from '../../models/IFilterContainer';
import FilterContainer from './FilterContainer';

const filterContainer: IFilterContainer = {
  filters: [
    { id: 1, label: "mock filter 1", count: 1 },
    { id: 2, label: "mock filter 2", count: 2 },
  ],
  header: "Mock filter",
  onClickFilter: () => {},
  selectedFilterId: 2,
  showCount: true
};

test('aktif filtre ekranda belirtilmeli', () => {
  const { container } = render(
    <FilterContainer filterContainer={filterContainer} />
  );

  expect(container.querySelectorAll('.filter-name-container')[1]?.classList.contains('active-filter')).toBeTruthy();
});
