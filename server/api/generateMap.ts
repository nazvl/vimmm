export default defineEventHandler((_event) => {
  const settings = {
    height: 16,
    width: 16,
    finish: 238, // id финальной клетки
    direction: 'row',
  };
  const map = [...generateMap()];
  function generateMap() {
    const res = [];
    const mapLength = settings.height * settings.width;
    let x = 0;
    let y = 0;
    for (let i = 0; i < mapLength; i++) {
      res.push({
        id: i,
        x,
        y,
        closed: (x <= 1 && y <= 1) || i === settings.finish ? false : Math.random() < 0.2,
      });
      x++;
      if (x === settings.width) {
        y++;
        x = 0;
      }
    }
    return res;
  }

  return {
    data: map,
    meta: settings,
  };
});
