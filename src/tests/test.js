import Team from '../js/classes/Team';
import Character from '../js/classes/Character';

test('get Character', () => {
  const firstHero = new Character('vlad', 'killer');
  expect(firstHero).toEqual({ name: 'vlad', type: 'killer' });
});

test('add hero', () => {
  const firstHero = new Character('vlad', 'killer');
  const game = new Team();
  game.add(firstHero);
  expect(game).toEqual({
    members: new Set([{
      name: 'vlad',
      type: 'killer',
    }]),
  });
});

test('add all heroes', () => {
  const firstHero = new Character('vlad', 'killer');
  const secondHero = new Character('vladik', 'zombie');
  const game = new Team();
  game.addAll(firstHero, secondHero);
  expect(game).toEqual({
    members: new Set([{
      name: 'vlad',
      type: 'killer',
    }, {
      name: 'vladik',
      type: 'zombie',
    }]),
  });
});

test('get array of heroes', () => {
  const firstHero = new Character('vlad', 'killer');
  const secondHero = new Character('vladik', 'zombie');
  const game = new Team();
  game.addAll(firstHero, secondHero);
  const result = game.toArray();
  expect(result).toEqual([{ name: 'vlad', type: 'killer' }, { name: 'vladik', type: 'zombie' }]);
});

test('get error', () => {
  expect(() => {
    const firstHero = new Character('vlad', 'killer');
    const game = new Team();
    game.add(firstHero);
    game.add(firstHero);
  }).toThrow();
});
