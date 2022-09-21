import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  text-align: center;
  overflow: hidden;
  // border: 1px solid #DCE1E2;
  border-radius: 6px;
  box-shadow: 4px 6px 5px -3px rgba(0, 0, 0, 0.5);
`;

export const TableHead = styled.thead`
  background-color: #27c7e9;
  text-transform: uppercase;
  color: #ffffff;
`;

export const TableHeadItem = styled.th`
  padding: 10px 0;
  &:not(:last-child) {
    border-right: 1px solid #ffffff;
  }
`;

export const TableRow = styled.tr`
  &:nth-of-type(2n) {
    background-color: #f0f3f4;
  }
`;

export const TableData = styled.td`
  padding: 10px 0;
  border-right: 1px solid #dce1e2;

  &:first-of-type {
    border-left: 1px solid #dce1e2;
  }
`;
