import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import InventoryTable from './App';
import { fetchInventoryData, deleteInventoryItems } from './data';

jest.mock('./data', () => ({
  fetchInventoryData: jest.fn().mockResolvedValue(mockInventoryData),
  deleteInventoryItems: jest.fn(),
}));

const mockInventoryData = [
  {
    inventory_id: 1,
    sku_color_id: 'SKU123',
    location: 'A1',
    qty: 10,
    warehouse_number: 'W1',
    amount_needed: 5,
    status: 'In Stock',
  }, 
];

describe('InventoryTable', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders inventory table with data', async () => {
    render(<InventoryTable />);

    await waitFor(() => {
      expect(screen.getByText('Inventory')).toBeInTheDocument();
    });

    expect(screen.getByText('SKU123')).toBeInTheDocument();
    expect(screen.getByText('A1')).toBeInTheDocument();
  });

  test('filters inventory items by SKU Color ID', async () => {
    render(<InventoryTable />);

    await waitFor(() => {
      expect(screen.getByText('SKU123')).toBeInTheDocument();
    });

    fireEvent.change(screen.getByPlaceholderText('Search by SKU Color ID'), {
      target: { value: 'SKU123' },
    });

    expect(screen.getByText('SKU123')).toBeInTheDocument();
  });

  test('deletes selected inventory items', async () => {
    render(<InventoryTable />);

    await waitFor(() => {
      expect(screen.getByText('SKU123')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Selected Actions'));
    fireEvent.click(screen.getByText('Delete Items'));

    await waitFor(() => {
      expect(deleteInventoryItems).toHaveBeenCalledWith([1]);
    });
  });
});
