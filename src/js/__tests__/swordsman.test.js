import Swordsman from '../swordsman';

test('creat Swordsman', () => {
  const swordsman1 = new Swordsman('Swordsman1', 'Swordsman');
  const result = {
    name: 'Swordsman1',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 40,
  };
  expect(swordsman1).toEqual(result);
});