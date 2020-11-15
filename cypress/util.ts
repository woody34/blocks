import { BaseData } from '../src/common/base';
import { selectors } from '../src/util/data-cy';
import { Headers } from '../src/components/Table/util';
import { get } from 'lodash';

export { selectors } from '../src/util/data-cy';

export const validateBlocksTableContent = <D extends BaseData>(
  headers: Headers<D>[],
  data: D[],
  selector?: string,
): void => {
  cy.get(selector ?? selectors.components.table.table).within(() => {
    cy.get(selectors.components.table.header).each(($th, i) => {
      cy.wrap($th).should('have.text', headers[i].label);
    });

    cy.get(selectors.components.table.row).each(($tr, rowIndex) => {
      cy.wrap($tr).within(() => {
        cy.get('td').each(($td, colIndex) => {
          const header = headers[colIndex];

          const expected = header.filter ? header.filter(data[rowIndex]) : get(data[rowIndex], header.value, '');
          cy.wrap($td).should('have.text', expected);
        });
      });
    });
  });
};
