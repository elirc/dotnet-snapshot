import { describe, expect, it } from 'vitest';

function calculateOpenTickets(statuses: string[]) {
  return statuses.filter((status) => status !== 'Closed').length;
}

describe('dashboard calculations', () => {
  it('counts all non-closed tickets as open work', () => {
    expect(calculateOpenTickets(['Open', 'InProgress', 'Closed', 'WaitingOnUser'])).toBe(3);
  });
});
